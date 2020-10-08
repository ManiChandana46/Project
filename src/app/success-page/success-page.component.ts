import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent implements OnInit {
  oneWayDetails: any = {};
  searchDetails: any = {};
  passengerDetail: any = {};
  returnDetails: any = {};
  seats: any;
  flightClass: string;
  scheduleId: string;
  customerId: number;
  noOfSeats: any;
  travelDate: any;
  seatSelected: any;
  returnStatus: boolean;
  returnScheduleId: any;
  returnNoOfSeats: any;
  returnClass: any;
  returnTravelDate: any;
  passengerDetails: any;
  transactionAmount: number;
  Type: string;
  cityFrom: string;
  cityTo: string;
  cityFromS: string;
  cityToS: string;
  returnCityFromS: string;
  returnCityToS: string;
  customerName: string;
  bookId: string;
  returnCityTo: any;
  returnCityFrom: any;
  class = "SinTicket";
  oneWayFare: string;
  returnFare: string;
  returnId: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.oneWayDetails = JSON.parse(sessionStorage.getItem('oneWayDetails'));
    this.flightClass = this.oneWayDetails.classtype;
    this.scheduleId = this.oneWayDetails.scheduleid;
    this.cityFrom = this.oneWayDetails.cityFrom;
    this.cityTo = this.oneWayDetails.cityTo;
    this.cityFromS = this.cityFrom.substring(0, 3);
    this.cityToS = this.cityTo.substring(0, 3);
    this.bookId = JSON.parse(sessionStorage.getItem('bookingId'));
    this.customerName = (sessionStorage.getItem('userName'));
    this.customerId = Number(sessionStorage.getItem('customerId'));
    this.oneWayFare = (sessionStorage.getItem('oneWayFare'));
    this.returnFare = (sessionStorage.getItem('returnFare'));
    this.searchDetails = JSON.parse(sessionStorage.getItem('searchDetails'));
    this.noOfSeats = this.searchDetails.noOfPassengers;
    this.travelDate = this.searchDetails.travelDate;
    this.seats = sessionStorage.getItem('seats');
    this.seatSelected = this.seats;
    this.returnId = (sessionStorage.getItem('returnId'));

    if (sessionStorage.getItem('ReturnSearch') === 'null') {
      this.returnStatus = false;
      console.log('return not avail');
    } else {
      console.log('return avail');
      this.class = "TwoTickets";
      this.returnDetails = JSON.parse(sessionStorage.getItem('returnDetails'));
      this.returnStatus = true;
      this.returnScheduleId = this.returnDetails.scheduleid;
      this.returnNoOfSeats = this.searchDetails.noOfPassengers;
      this.returnClass = this.returnDetails.classtype;
      this.returnTravelDate = this.searchDetails.returnTravelDate;
      this.returnCityTo = this.returnDetails.cityTo;
      this.returnCityFrom = this.returnDetails.cityFrom;
      this.returnCityFromS = this.returnDetails.cityFrom.substring(0, 3);
      this.returnCityToS = this.returnDetails.cityTo.substring(0, 3);
    }

    this.passengerDetail = JSON.parse(
      sessionStorage.getItem('passesngersList')
    );

    this.passengerDetails = this.passengerDetail;

    this.transactionAmount = Number(
      sessionStorage.getItem('totalFare')
    );

    this.Type = 'Debit Card';

    //console.log(this.);
  }

  goHome() {
    sessionStorage.clear();
    this.router.navigate(['/search']);
  }
  savePdf() {

    let docDefinition = {

      header: 'Booking Details',
      content: [
        {
          text: 'Name :' + this.customerName
        },
        {
          columns: [
            [{
              text: 'Booking Id : ' + this.bookId
            },
            {
              text: 'Source : ' + this.cityFrom
            },
            {
              text: 'Destination : ' + this.cityTo
            },
            {
              text: 'Departure Time : ' + this.oneWayDetails.departureTime
            },
            {
              text: 'Arrival Time : ' + this.oneWayDetails.arrivalTime
            },
            {
              text: 'Seats Selected : ' + this.seats
            },
            {
              text: 'Class : ' + this.flightClass
            }]
          ]
        }
      ]
    }
    pdfMake.createPdf(docDefinition).download();
  };
  savePdf1() {

    let docDefinition = {

      header: 'Return Details',
      content: [
        {
          text: 'Name :' + this.customerName
        },
        {
          columns: [
            [{
              text: 'Return Id : ' + this.returnId
            },
            {
              text: 'Source : ' + this.returnCityFrom
            },
            {
              text: 'Destination : ' + this.returnCityTo
            },
            {
              text: 'Departure Time : ' + this.returnDetails.departureTime
            },
            {
              text: 'Arrival Time : ' + this.returnDetails.arrivalTime
            },
            /*{
              text: 'Seats Selected : ' + this.seats
            },*/
            {
              text: 'Class : ' + this.flightClass
            }]
          ]
        }
      ]
    }
    pdfMake.createPdf(docDefinition).download();
  };
}
