import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TypeState} from "../models/type-states";

@Injectable({
  providedIn: 'root'
})
export class TypeStatesService {
  url = environment.apiUrl + '/type-states';
  options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getTypeStates() {
    return this.http.get(this.url, this.options);
  }

  deleteTypeState(id) {
    return this.http.delete(this.url + "/destroy/" + id, this.options);
  }

  getTypeState(id) {
    return this.http.get(this.url + "/show/" + id, this.options);
  }

  updateTypeState(typeState: TypeState) {
    const body = {name: typeState.name};
    return this.http.post(this.url + "/update/" + typeState.id, body, this.options);
  }

  newTypeState(typeState: TypeState) {
    const body = {name: typeState.name};
    return this.http.post(this.url + "/update", body, this.options);
  }
}
