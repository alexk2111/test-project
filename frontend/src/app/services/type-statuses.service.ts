import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TypeStatus} from "../models/type-statuses";

@Injectable({
  providedIn: 'root'
})
export class TypeStatusesService {
  url = environment.apiUrl + '/type-statuses';
  options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getTypeStatuses() {
    return this.http.get(this.url, this.options);
  }

  deleteTypeStatus(id) {
    return this.http.delete(this.url + "/destroy/" + id, this.options);
  }

  getTypeStatus(id) {
    return this.http.get(this.url + "/show/" + id, this.options);
  }

  updateTypeStatus(typeStatus: TypeStatus) {
    const body = {name: typeStatus.name};
    return this.http.post(this.url + "/update/" + typeStatus.id, body, this.options);
  }

  newTypeStatus(typeStatus: TypeStatus) {
    const body = {name: typeStatus.name};
    return this.http.post(this.url + "/update", body, this.options);
  }
}
