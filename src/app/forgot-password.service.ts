import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForgotPassword } from './forgot-password/ForgotPassword';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService {
  constructor(private http: HttpClient) {}

  changePassword(forgotPassword: ForgotPassword): Observable<any> {
    let url = 'http://localhost:8181/forgotPassword';
    return this.http.post(url, forgotPassword);
  }

  sendOtp(mail: String): Observable<any> {
    let url = 'http://localhost:8181/sendOtp?mail=' + mail;
    return this.http.get(url);
  }
}
