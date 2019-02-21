import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  token: string;
  url = environment.apiUrl + '/auth';
  options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  checkToken() {
    if (!(this.token = localStorage.getItem('token'))) {
      return;
    }

    const body = {
      token: this.token
    };
    this.http.post(this.url + '/check', body, this.options)
      .subscribe(data => {
          return;
        },
        error => {
          console.log('error123');
          localStorage.removeItem('token');
          this.router.navigate(['./auth/login']);
        })
  }
}
