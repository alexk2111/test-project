import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  url = environment.apiUrl + '/auth';
  options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) {

  }

  login(userEmail, userPassword) {
    const body = {
      email: userEmail,
      password: userPassword
    };
    return this.http.post(this.url + '/login', body, this.options)
  }
  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
  }

  saveToken(token) {
    localStorage.setItem('token', token);
  }

  isLoggedIn() {
    this.loggedIn = !!localStorage.getItem('token');
    return this.loggedIn;
  }
}
