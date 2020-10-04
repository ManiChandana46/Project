import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user';
import { RegisterStatus } from './registerStatus';
import { Observable } from 'rxjs';
import { BookedTiketSearch } from './booking-details/bookedTicketSearch';
import { Booking } from './booking-details/bookings';
import { CheckRegistration } from './checkResgitration'
@Injectable({
  providedIn: 'root'
})
export class AirlinesServiceService {

  constructor(private http:HttpClient) { }

  register(user:User):Observable<RegisterStatus>{
    let url="http://localhost:8181/addregistration";
    return this.http.post<RegisterStatus>(url,user);
  }
  /*check(user:User):Observable<any>{
    let url="http://localhost:8181/checkregistration";
    return this.http.post<any>(url,user.customerEmail);
  }*/

  bookedTicketSearch(ticketSearch:BookedTiketSearch):Observable<any>{
    let url="http://localhost:8181/searchbooking";
    return this.http.post<Booking>(url,ticketSearch);
  }
}
