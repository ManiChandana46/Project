import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking-details/bookings';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
})
export class BookingDetailsComponent implements OnInit {
  booking: Booking;
  bookings: Booking[] = [];
  book: Booking;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.bookings = [
      new Booking(
        'T303',
        '23-09-2020',
        '30-09-2020',
        5,
        'AA-203',
        'Mumbai',
        'Chennai',
        '3:30 P.M',
        '5:00 P.M',
        'Business',
        'INR 4800'
      ),
    ];
  }

  open(content: any, id: number) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        if (`${result}` === 'Save click') this.bookings.splice(id, 1);
      });
  }

  // cancel() {

  //   sessionStorage.setItem("bookingDetails",JSON.stringify(this.book));
  // }
}
