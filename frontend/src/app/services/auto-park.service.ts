import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AutoParkService {
  url = environment.apiUrl + '/auto-parks';
  options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

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
    const body = {
      name: autoPark.name,
      driver_id: autoPark.driver_id,
      route_id: autoPark.route_id,
      type_car_id: autoPark.type_car_id,
      type_state_id: autoPark.type_state_id,
      type_status_id: autoPark.type_status_id,
      age: autoPark.age
    };
    return this.http.post(this.url + "/update/" + autoPark.id, body, this.options);
  }

  newAutoPark(autoPark) {
    const body = {
      name: autoPark.name,
      driver_id: autoPark.driver_id,
      route_id: autoPark.route_id,
      type_car_id: autoPark.type_car_id,
      type_state_id: autoPark.type_state_id,
      type_status_id: autoPark.type_status_id,
      age: autoPark.age
    };
    return this.http.post(this.url + "/update/", body, this.options);
  }
}
