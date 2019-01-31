import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

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

}
