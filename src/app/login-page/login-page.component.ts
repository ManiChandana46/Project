import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginDetails } from './login-details';
import { LoginService } from '../login.service';

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

  login: loginDetails = new loginDetails();
  message: string;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.userEmail = '';
    this.userPassword = '';
    this.adminEmail = '';
    this.adminPassword = '';
  }

  userSignIn() {
    this.login.email = this.userEmail;
    this.login.password = this.userPassword;

    console.log(this.login);
    this.loginService.login(this.login).subscribe((response) => {
      console.log(response);
      if (response.status == true) {
        //console.log('Welcome back ' + response.firstName);
        sessionStorage.setItem('customerId', response.customerId);
        sessionStorage.setItem('userName', response.firstName+" "+response.lastName);
        sessionStorage.setItem('login', 'true');
        if (sessionStorage.getItem('searchDetails') == null) {
          this.router.navigate(['/search']);
        } else if (sessionStorage.getItem('oneWayDetails') == null) {
          this.router.navigate(['/selectflight']);
        } else {
          this.router.navigate(['/personalInfo']);
        }
      } else {
        this.message = response.statusMessage;
        alert(this.message);
        //console.log(this.message);
      }
    });

    // const newItem: loginDetails = {
    //   email: this.userEmail,
    //   password: this.userPassword,
    // };
  }
  userSignUp() {
    this.router.navigate(['/registration']);
  }
  adminSignIn() {
    //admin user name and password
    if (this.adminEmail == 'aviation' && this.adminPassword == 'aviation') {
      alert('login..');
      sessionStorage.setItem('AdminUsername','Admin');
      sessionStorage.setItem('adminLogin','true');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Enter Correct username or password');
      this.adminEmail = '';
      this.adminPassword = '';
    }
  }
}
