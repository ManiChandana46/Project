import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Airlines';
  loginMessage=" Login/SignUp";
  disableContext=false;

    constructor(private router:Router)
    {}
  ngOnInit(){
    if(!sessionStorage.getItem("login"))
    {
    sessionStorage.setItem('login', 'false');
    sessionStorage.setItem('adminLogin','false');
    }
    // if(sessionStorage.getItem("login"))
    // {
    //   this.loginMessage=sessionStorage.getItem("firstName");
    // }
    // if(sessionStorage.getItem("adminLogin"))
    // {
    //   this.loginMessage=sessionStorage.getItem("AdminUsername")
    // }

  }

  Idle()
  {
    if(sessionStorage.getItem("login")=="true"){
      this.loginMessage=" "+sessionStorage.getItem("userName");
      this.disableContext=true;
      //console.log("user");
    }
    if(sessionStorage.getItem("adminLogin")=="true"){
      this.loginMessage=" "+sessionStorage.getItem("AdminUsername");
      this.disableContext=true;
     // console.log("admin");
    }
    return true;
  }

  Booking()
  {
        this.router.navigate(['/bookingDetails']);
  }

  Logout()
  {
    sessionStorage.clear();
    sessionStorage.setItem('login', 'false');
    sessionStorage.setItem('adminLogin','false');
    this.loginMessage=" Login/SignUp";
    this.disableContext=false;
    this.router.navigate(['/search']);
  }
}
