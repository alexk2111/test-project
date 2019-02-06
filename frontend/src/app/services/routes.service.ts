import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Route} from "../models/route";

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  url = environment.apiUrl + '/routes';
  options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getRoutes() {
    return this.http.get(this.url, this.options);
  }

  deleteRoute(id) {
    return this.http.delete(this.url + "/destroy/" + id, this.options);
  }

  getRoute(id) {
    return this.http.get(this.url + "/show/" + id, this.options);
  }

  updateRoute(route: Route) {
    const body = {name: route.name};
    return this.http.post(this.url + "/update/" + route.id, body, this.options);
  }

  newRoute(route: Route) {
    const body = {name: route.name};
    return this.http.post(this.url + "/update", body, this.options);
  }
}
