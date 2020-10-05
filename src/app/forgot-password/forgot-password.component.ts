import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPassword } from './ForgotPassword';
import { ForgotPasswordService } from '../forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  userEmail: string;
  userPassword: string;
  confirmPassword: string;

  forgotPassword: ForgotPassword = new ForgotPassword();

  constructor(
    private router: Router,
    private forgotPasswordService: ForgotPasswordService
  ) { }

  ngOnInit(): void { }

  changePassword() {
    this.forgotPassword.email = this.userEmail;
    this.forgotPassword.newPassword = this.userPassword;

    this.forgotPasswordService.changePassword(this.forgotPassword).subscribe((response) => {
      if (response.status == true) {
        alert('Password Changed Succesfully');
        this.router.navigate(['/login']);
      } else {
        alert(response.statusMessage);
      }
    });
  }
}
