import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from './payment/payment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  pay(payment: Payment): Observable<any> {
    let url = 'http://localhost:8181/payment';
    return this.http.post(url, payment);
  }
}
