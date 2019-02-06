import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TypeCar} from "../models/type-car";

@Injectable({
  providedIn: 'root'
})
export class TypeCarsService {
  url = environment.apiUrl + '/type-cars';
  options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getTypeCars() {
    return this.http.get(this.url, this.options);
  }

  deleteTypeCar(id) {
    return this.http.delete(this.url + "/destroy/" + id, this.options);
  }

  getTypeCar(id) {
    return this.http.get(this.url + "/show/" + id, this.options);
  }

  updateTypeCar(typeCar: TypeCar) {
    const body = {name: typeCar.name};
    return this.http.post(this.url + "/update/" + typeCar.id, body, this.options);
  }

  newTypeCar(typeCar: TypeCar) {
    const body = {name: typeCar.name};
    return this.http.post(this.url + "/update", body, this.options);
  }
}
