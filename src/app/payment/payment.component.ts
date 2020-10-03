import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Payment } from './payment';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  payment: Payment = new Payment();
  oneWayDetails: any;
  searchDetails: any;
  passengerDetail: any;
  returnDetail: any;
  constructor() {}

  ngOnInit(): void {}

  pay() {
    this.oneWayDetails = JSON.parse(sessionStorage.getItem('oneWayDetails'));

    this.payment.flightClass = this.oneWayDetails.classtype;
    this.payment.scheduleId = this.oneWayDetails.scheduleid;
    this.payment.customerId = Number(sessionStorage.getItem('customerId'));

    this.searchDetails = JSON.parse(sessionStorage.getItem('searchDetails'));

    this.payment.noOfSeats = this.searchDetails.noOfPassengers;

    this.payment.travelDate = this.searchDetails.travelDate;

    
    
    if (sessionStorage.getItem('ReturnSearch') === "null") {
      this.payment.returnStatus = false;
      console.log("return not avail");
    } else {
      console.log("return avail");
      this.returnDetail = JSON.parse(sessionStorage.getItem('returnDetails'));
      this.payment.returnStatus = true;
      this.payment.returnScheduleId = this.returnDetail.scheduleid;
      this.payment.returnNoOfSeats = this.searchDetails.noOfPassengers;
      this.payment.returnClass = this.returnDetail.classtype;
      this.payment.travelDate = this.searchDetails.returnTravelDate;
      
    }

    this.passengerDetail = JSON.parse(
      sessionStorage.getItem('passesngersList')
    );

    this.payment.passengerDetails = this.passengerDetail;

    this.payment.transactionAmount = Number(
      sessionStorage.getItem('totalFare')
    );

    this.payment.paymentType = 'Debit Card';

    console.log(this.payment);
    
  }
}
