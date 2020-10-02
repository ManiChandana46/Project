import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Airlines';
  loginMessage="Login/SignUp";
    constructor(private router:Router)
    {}
  ngOnInit(){
    // if(sessionStorage.getItem("login"))
    // {
    //   this.loginMessage=sessionStorage.getItem("firstName");
    // }
    // if(sessionStorage.getItem("adminLogin"))
    // {
    //   this.loginMessage=sessionStorage.getItem("AdminUsername")
    // }

  }

  Booking()
  {
        this.router.navigate(['/bookingDetails']);
  }
}
