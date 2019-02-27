import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userEmail: string;
  userPassword:string;
  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.logout();
  }

  login(userEmail, userPassword) {
    this.authService.login(userEmail, userPassword).subscribe(data => {
      this.authService.saveToken(data);
      this.router.navigate(['/auto-park']);
    }, error => {
      this.error = error.error.error;
    });
  }

}
