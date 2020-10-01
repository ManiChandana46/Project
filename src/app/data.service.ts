import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user';
import { RegisterStatus } from './registerStatus';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  public doRegistration(user:User){
    return this.http.post("http://localhost:8080/addregistration",user,{responseType: 'text' as 'json'});
  }
}
