import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking-details/bookings';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookedTiketSearch } from '../booking-details/bookedTicketSearch';
import { AirlinesServiceService } from '../airlines-service.service';
import { NgxSpinnerService } from 'ngx-spinner';

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

  customerId:number;

  message = '';
  disabled = false;
  show1 = false;

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


    this.customerId = Number(sessionStorage.getItem("customerId"));

    this.service.displayBooking(this.customerId).subscribe((response) => {
      this.bookings = response;
      this.show = true;
      this.show1 = true;
      this.spinner.hide();
    });
  }
  info: string;
  bookingId: number;
  search: BookedTiketSearch = new BookedTiketSearch();
  searchTicket() {
    if (this.SearchTicketForm.valid) {
      this.show = true;

      this.service.bookedTicketSearch(this.search).subscribe((response) => {
        let addedBooking = this.bookings.find((o) => o.bookId === response.bookId);

        if (response.returnId != 0) {
          if (addedBooking === undefined) this.bookings.push(response);
          this.show = true;
          this.show1 = true;
          this.bookingId = response.bookId;
        } else {
          if (addedBooking === undefined) this.bookings.push(response);
          this.show = true;
        }
      });
    } else {
      alert('Enter TicketId');
    }
  }
  cancelBooking() {
    //sessionStorage.setItem("bookingId",)
  }
  cancelReturn() {}

  open(content: any, id: number, bookingId: number) {
    this.search.bookingId = bookingId;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        if (`${result}` === 'Save click') {
          this.service.cancelBooking(this.search).subscribe((response) => {
            //this.bookings.splice(id, 1);
            this.bookings = this.bookings.filter((item) => item.bookId !== bookingId);
            //this.info = response;
            //this.show = false;
          });
        }
      });
  }

  open1(content: any, id: number, bookingId: number) {
    this.search.bookingId = bookingId;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        if (`${result}` === 'Save click') {
          this.service
            .cancelReturnBooking(this.search)
            .subscribe((response) => {
              this.bookings = this.bookings.filter((item) => item.bookId !== bookingId);
              //this.bookings.splice(id, 1);
              // this.info = response;
              this.show1 = false;
            });
        }
      });
  }
}
