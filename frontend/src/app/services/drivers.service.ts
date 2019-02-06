import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Driver} from "../models/driver";

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  url = environment.apiUrl + '/drivers';
  options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getDrivers() {
    return this.http.get(this.url, this.options);
  }

  deleteDriver(id) {
    return this.http.delete(this.url + "/destroy/" + id, this.options);
  }

  getDriver(id) {
    return this.http.get(this.url + "/show/" + id, this.options);
  }

  updateDriver(driver: Driver) {
    const body = {name: driver.name};
    return this.http.post(this.url + "/update/" + driver.id, body, this.options);
  }

  newDriver(driver: Driver) {
    const body = {name: driver.name};
    return this.http.post(this.url + "/update", body, this.options);
  }
}
