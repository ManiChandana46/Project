import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../../assets/shared/user-name.validator';
import { PasswordValidator } from '../../assets/shared/password.validator';
import { ContactNumberValidator } from '../../assets/shared/contact-number.validator';
import{ User} from '../user';
import { Router } from '@angular/router';
import { DataService } from "../data.service";
import { HttpClient } from '@angular/common/http';
import { RegisterStatus } from '../registerStatus';

import { AirlinesServiceService } from "../airlines-service.service";
import { CheckRegistration } from '../checkResgitration';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  title='Register Page';
  //getter method for first name.
  user:User=new User();

  get FName(){
    return this.registerForm.get('fName');
  }

  //getter method for Last name.
  get LName(){
    return this.registerForm.get('lName');
  }

  //getter method for Email.
  get Email(){
    return this.registerForm.get('email');
  }

  //getter method for contact Number.
  get ContactNumber(){
    return this.registerForm.get('contactNumber');
  }



  //constructor
  constructor(private fb: FormBuilder,private router:Router,private service: AirlinesServiceService , private http: HttpClient, private spinner: NgxSpinnerService){}



  //declare variable of form group type.
  registerForm: FormGroup;
  submitted= false;



  //Oninit method.
  ngOnInit(){
    this.registerForm= this.fb.group({
      //First Name Validator
      fName: ['',[Validators.required, Validators.minLength(3), Validators.pattern, ForbiddenNameValidator(/admin/),]],

      //Last Name Validator
      lName: ['',[Validators.required, Validators.minLength(3), ForbiddenNameValidator(/admin/)]],

  
      //Email Validator
      email: ['',[Validators.required, Validators.minLength(3), Validators.email]],


      //Password Validator
      password: ['',[Validators.required, Validators.minLength(8)]],


      //Confirm Password Validator
      confirmPassword: ['',[Validators.required]],


      //Contact Number Validator
      contactNumber: ['',[Validators.required, ContactNumberValidator ]],

    },{validator: PasswordValidator});
  }
  
  //submit on click.
  /*register(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.registerForm.markAsTouched(); //fields will remain marked once filled. Even after submit.
      alert('Re-enter Correct Details.');
 

    }
    else{
      //this.registerForm.markAsTouched();
      alert(JSON.stringify(this.user));
      sessionStorage.setItem("registerDetails",JSON.stringify(this.user));
      this.router.navigate(['/login']);
      //alert('Details Has Been Registered.');
     let resp=this.service.doRegistration(this.user);
      resp.subscribe((data)=>this.message=data)
      this.router.navigate(['/dashboardLink']);
    }
  }*/
 // search:User=new User();
 
  searchb:RegisterStatus;
  info:String;
  cr:CheckRegistration;
  register(){
    this.spinner.show();
    if (this.registerForm.invalid) {
      this.spinner.hide();
      this.registerForm.markAsTouched(); //fields will remain marked once filled. Even after submit.
      alert('Re-enter Correct Details.');
    }
    
    else{
      this.spinner.hide();
      alert(JSON.stringify(this.user));
      //this.service.check(this.user).subscribe(data1=>{
        //if(data1.status==false){
          this.service.register(this.user).subscribe(data=>{
            if(data.status==true){
              console.log(data.statusMessage);
              this.info=data.statusMessage;
            }
            else{
              this.info=data.statusMessage;
              alert(JSON.stringify(data.statusMessage));
            }
          })
        //}
        //else{
          //alert("you have already registered please login");
        //}
      //})
      
    }
    //this.router.navigate(['/login']);
  }
}