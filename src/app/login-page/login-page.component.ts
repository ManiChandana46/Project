import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],

})
export class LoginPageComponent implements OnInit {
  email;

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  userSignIn(){
    console.log(this.email);
    sessionStorage.setItem("login",JSON.stringify(true));
    if(sessionStorage.getItem("searchDetails")==null)
    {
      this.router.navigate(['/search']);
    }
    else if(sessionStorage.getItem("oneWayDetails")==null)
    {
      this.router.navigate(['/selectflight'])
    }
    else
    {
      this.router.navigate(['/reviewBooking'])
    }

  }
  userSignUp(){

  }
  adminSignIn(){

  }

}
