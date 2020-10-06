import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { RegisterStatus } from './registerStatus';
import { Observable } from 'rxjs';
import { BookedTiketSearch } from './booking-details/bookedTicketSearch';
@Injectable({
  providedIn: 'root',
})
export class AirlinesServiceService {
  constructor(private http: HttpClient) {}

  register(user: User): Observable<RegisterStatus> {
    let url = 'http://localhost:8181/addregistration';
    return this.http.post<RegisterStatus>(url, user);
  }

  bookedTicketSearch(ticketSearch: BookedTiketSearch): Observable<any> {
    let url = 'http://localhost:8181/searchbooking';
    return this.http.post(url, ticketSearch);
  }
  cancelBooking(cancelticket: BookedTiketSearch): Observable<any> {
    let url = 'http://localhost:8181/cancelbooking';
    return this.http.post(url, cancelticket);
  }
  cancelReturnBooking(cancelticket: BookedTiketSearch): Observable<any> {
    let url = 'http://localhost:8181/cancelreturnbooking';
    return this.http.post(url, cancelticket);
  }

  displayBooking(customerId: number):Observable<any> {
    let url = 'http://localhost:8181/displayBookingDetails?customerId=' + customerId;
    return this.http.get(url)
  }


}
