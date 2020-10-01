import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddFlightService {

  constructor(private http : HttpClient) { }

  addFlight(Object) : Observable<any> {
    let url= "http://localhost:9191/addFlight";
    return this.http.post(url,Object);
  }

}
