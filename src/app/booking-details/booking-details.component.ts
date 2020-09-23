import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking-details/bookings';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms'
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  booking: Booking;
  bookings: Booking[] = [];
  book: Booking;
  constructor() { }

  ngOnInit(): void {
    this.bookings = [
      new Booking("T303","23-09-2020","30-09-2020",5,"AA-203","Mumbai","Chennai","3:30 P.M","5:00 P.M","Business","INR 4800")
    ];
  }
  cancel() {
    console.log(this.book);
    
    sessionStorage.setItem("bookingDetails",JSON.stringify(this.book));
  }

}
