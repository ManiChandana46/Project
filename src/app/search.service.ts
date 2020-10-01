import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchDetails } from './search-module/search-details';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchFlights(searchDetails:SearchDetails):Observable<any>{
    let url = 'http://localhost:8181/search';
    return this.http.post(url, searchDetails);
  }
}
