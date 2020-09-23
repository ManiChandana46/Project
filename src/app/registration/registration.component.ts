import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../../assets/shared/user-name.validator';
import { PasswordValidator } from '../../assets/shared/password.validator';
import { ContactNumberValidator } from '../../assets/shared/contact-number.validator';
import { User } from "../user";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  title='Regsister Page';
  //getter method for first name.
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
  constructor(private fb: FormBuilder){}



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
  onSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.registerForm.markAsTouched(); //fields will remain marked once filled. Even after submit.
      alert('Re-enter Correct Details.');
////            alert(this.registerForm.controls.fName.value);  <-- how to call the value of a field.   

    }
    else{
      this.registerForm.markAsTouched();
      //alert('Details Has Been Registered.');
     /* let resp=this.service.doRegistration(this.user);
      resp.subscribe((data)=>this.message=data)
      this.router.navigate(['/dashboardLink']);*/
    }
  }
}