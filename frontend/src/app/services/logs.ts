import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  url = environment.apiUrl + '/log';
  options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getLogs(id) {
    return this.http.get(this.url + "/show/" + id, this.options);
  }

  clearLog(id) {
    return this.http.post(this.url + "/clear/" + id, this.options)
  }

  deleteLog(id) {
    return this.http.post(this.url + "/destroy/" + id, this.options)
  }
}
