import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginDetails } from './login-page/login-details';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(login: loginDetails): Observable<any> {
    let url = 'http://localhost:8080/login';
    return this.http.post(url, login);
  }
}
