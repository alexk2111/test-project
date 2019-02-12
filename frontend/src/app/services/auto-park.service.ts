import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AutoParkService {
  url = environment.apiUrl + '/auto-parks';
  options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getAutoParks() {
    return this.http.get(this.url, this.options);
  }

  deleteAutoPark(id) {
    return this.http.delete(this.url + "/destroy/" + id, this.options);
  }

  getAutoPark(id) {
    return this.http.get(this.url + "/show/" + id, this.options);
  }

  updateAutoPark(autoPark) {
    const body = {name: autoPark.name};
    return this.http.post(this.url + "/update/" + autoPark.id, body, this.options);
  }
}
