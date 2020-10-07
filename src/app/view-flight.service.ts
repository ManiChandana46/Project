import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ViewFlightService {

  constructor(private http : HttpClient) { }

  body :any;

  viewFlight() : Observable<any> {
    let url= "http://localhost:8181/viewFlight";
    return this.http.put(url,this.body);
  }
}
