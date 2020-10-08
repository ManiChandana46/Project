import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPassword } from './ForgotPassword';
import { ForgotPasswordService } from '../forgot-password.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  message: string;

  forgotPassword: ForgotPassword = new ForgotPassword();

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private forgotPasswordService: ForgotPasswordService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  sendOtp(content: any) {
    this.message = 'Otp sent';
    this.modalService.open(content).result.then();
    document.getElementById('otp').innerHTML = 'Resend OTP';
    this.forgotPasswordService.sendOtp(this.userEmail).subscribe((response) => {
      this.orignalOtp = response;
    });
  }

  changePassword(content: any) {
    this.spinner.show();
    this.forgotPassword.email = this.userEmail;
    this.forgotPassword.newPassword = this.userPassword;

    this.forgotPasswordService
      .changePassword(this.forgotPassword)
      .subscribe((response) => {
        if (response.status == true) {
          this.spinner.hide();
          if (this.otp === this.orignalOtp) {
            this.message = 'Password Changed Successfully';
            this.modalService.open(content).result.then((result) => {
              if (`${result}` === 'Save click') {
                this.router.navigate(['/login']);
              }
            });
          } else {
            this.message = 'Enter The Correct OTP';
            this.modalService.open(content).result.then();
          }
        } else {
          this.spinner.hide();
          this.message = response.statusMessage;
          this.modalService.open(content).result.then();
        }
      });
  }
}
