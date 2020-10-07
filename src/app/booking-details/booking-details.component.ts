import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking-details/bookings';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookedTiketSearch } from '../booking-details/bookedTicketSearch';
import { AirlinesServiceService } from '../airlines-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
declare var $: any;

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
})
export class BookingDetailsComponent implements OnInit {
  bookings: Booking[];
  SearchTicketForm: FormGroup;
  show = false;
  return = false;

  customerId: number;

  message = '';
  disabled = false;

  todayDate = Date.parse(new Date().toISOString().slice(0, 10));

  get TicketId() {
    return this.SearchTicketForm.get('ticketId');
  }

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private service: AirlinesServiceService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.bookings = [];

    if (sessionStorage.getItem('login') == 'false') {
      this.message = '*You have to login first';
      this.disabled = true;
    } else {
      this.message = '';
      this.disabled = false;
    }

    this.SearchTicketForm = this.fb.group({
      //TicketId Validator
      ticketId: ['', [Validators.required, Validators.minLength(1)]],
    });

    this.customerId = Number(sessionStorage.getItem('customerId'));

    this.service.displayBooking(this.customerId).subscribe((response) => {
      this.bookings = response;

      this.show = true;

      this.spinner.hide();
    });
  }

  compare(d1: Date) {
    return this.todayDate < Date.parse(String(d1)) ? 1 : 0;
  }

  search: BookedTiketSearch = new BookedTiketSearch();
  searchTicket() {
    if (this.SearchTicketForm.valid) {
      this.show = true;

      $('#collapse' + this.search.bookingId).collapse('toggle');
    } else {
      alert('Enter TicketId');
    }
  }

  open(content: any, bookingId: number) {
    this.search.bookingId = bookingId;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        if (`${result}` === 'Save click') {
          this.service.cancelBooking(this.search).subscribe(() => {
            this.bookings = this.bookings.filter(
              (item) => item.bookId !== bookingId
            );
          });
        }
      });
  }

  open1(content: any, bookingId: number, id: number) {
    this.search.bookingId = bookingId;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        if (`${result}` === 'Save click') {
          this.service.cancelReturnBooking(this.search).subscribe(() => {
            this.bookings[id].returnId = 0;
          });
        }
      });
  }
}
