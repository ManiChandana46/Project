import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DeleteFlightService {

  constructor(private http : HttpClient) { }

  deleteFlight(Object) : Observable<any> {
    let url= "http://localhost:8181/flightDelete";
    return this.http.post(url,Object);
  }

}
