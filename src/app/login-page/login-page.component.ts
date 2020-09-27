import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginDetails } from './login-details';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  userEmail: string;
  userPassword: string;

  adminEmail: string;
  adminPassword: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userEmail = '';
    this.userPassword = '';
    this.adminEmail = '';
    this.adminPassword = '';
  }

  userSignIn() {
    const newItem: loginDetails = {
      email: this.userEmail,
      password: this.userPassword,
    };

    sessionStorage.setItem('login', JSON.stringify(true));
    if (sessionStorage.getItem('searchDetails') == null) {
      this.router.navigate(['/search']);
    } else if (sessionStorage.getItem('oneWayDetails') == null) {
      this.router.navigate(['/selectflight']);
    } else {
      this.router.navigate(['/reviewBooking']);
    }
  }
  userSignUp() {
    this.router.navigate(['/registration']);
  }
  adminSignIn() {
    //admin user name and password
    if (this.adminEmail == 'aviation' && this.adminPassword == 'aviation') {
      alert('login..');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Enter Correct username or password');
      this.adminEmail = '';
      this.adminPassword = '';
    }
  }
}
