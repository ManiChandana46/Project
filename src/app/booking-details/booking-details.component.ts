import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking-details/bookings';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookedTiketSearch } from '../booking-details/bookedTicketSearch';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
})
export class BookingDetailsComponent implements OnInit {
  booking: Booking;
  bookings: Booking[] = [];
  book: Booking;
  SearchTicketForm: FormGroup;
  submitted= false;
  show=false;
  return=false;
  re: number=1;

  get TicketId(){
    return this.SearchTicketForm.get('ticketId');
  }

  constructor(private modalService: NgbModal,private fb: FormBuilder) {}

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
        'INR 4800',
        101
      ),
    ];
    this.SearchTicketForm= this.fb.group({

      //TicketId Validator
      ticketId: ['',[Validators.required, Validators.minLength(1)]]

    });
  }
  search:BookedTiketSearch=new BookedTiketSearch();
  searchTicket(){
    this.show=true;
    alert(JSON.stringify(this.search))
    if(this.re==1){
      this.return=true;

    }
    

      
    
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
