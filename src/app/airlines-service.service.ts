import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user';
import { RegisterStatus } from './registerStatus';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirlinesServiceService {

  constructor(private http:HttpClient) { }

  register(user:User){
    let url="http://localhost:8080/addregistration";
    return this.http.post<RegisterStatus>(url,user);
  }
}
