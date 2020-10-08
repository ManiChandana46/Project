import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPassword } from './ForgotPassword';
import { ForgotPasswordService } from '../forgot-password.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  userEmail: string;
  userPassword: string;
  confirmPassword: string;
  otp: number;
  orignalOtp: number;

  forgotPassword: ForgotPassword = new ForgotPassword();

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private forgotPasswordService: ForgotPasswordService
  ) {}

  ngOnInit(): void {}

  sendOtp() {
    alert("Otp sent");
    document.getElementById('otp').innerHTML = "Resend OTP"
    this.forgotPasswordService
      .sendOtp(this.userEmail)
      .subscribe((response) => {
        this.orignalOtp = response;
      });
  }

  changePassword() {
    this.spinner.show();
    this.forgotPassword.email = this.userEmail;
    this.forgotPassword.newPassword = this.userPassword;

    this.forgotPasswordService
      .changePassword(this.forgotPassword)
      .subscribe((response) => {
        if (response.status == true) {
          this.spinner.hide();
          if (this.otp === this.orignalOtp) {
            alert('Password Changed Succesfully');
            this.router.navigate(['/login']);
          } else {
            alert('Enter The Correct OTP');
          }
        } else {
          this.spinner.hide();
          alert(response.statusMessage);
        }
      });
  }
}
