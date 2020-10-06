import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking-details/bookings';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookedTiketSearch } from '../booking-details/bookedTicketSearch';
import { AirlinesServiceService } from '../airlines-service.service';
import { CancelBooking } from '../cancelBooking'
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css'],
})
export class BookingDetailsComponent implements OnInit {
  booking: Booking;
  bookings: Booking[]=[];
  book: Booking;
  SearchTicketForm: FormGroup;
  submitted = false;
  show = false;
  return = false;
 
  message="";
  disabled=false;
  show1 = false;

  get TicketId() {
    return this.SearchTicketForm.get('ticketId');
  }

  constructor(private modalService: NgbModal, private fb: FormBuilder,private service: AirlinesServiceService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("login") == "false")
    {
      this.message="*You have to login first";
      this.disabled=true;
    }
    else{
      this.message="";
      this.disabled=false;
    }

    this.bookings = [
      new Booking(
        601,
        '23-10-2020',
        2,
        '2A,2B',
        'bangalore',
        'chennai',
        '11:00',
        '12:00',
        'economy',
        500,
        2,
        'buissness',
        '3A,3B',
        'chennai',
        'bangalore',
        '15:00',
        '17:00'),
    ];
    this.SearchTicketForm = this.fb.group({

      //TicketId Validator
      ticketId: ['', [Validators.required, Validators.minLength(1)]]

    });
  }
  info:string;
  bookingId:number;
  search: BookedTiketSearch = new BookedTiketSearch();
  searchTicket() {
    if (this.SearchTicketForm.valid) {
      this.show = true;
      alert(JSON.stringify(this.search))
      /*if (this.re == 1) {
        this.return = true;

      }*/
      
      /*this.service.bookedTicketSearch(this.search).subscribe((response)=>{
        this.bookings=response;
        if(this.bookings.returnId!=0){
          this.show = true;
          this.show1=true;
          this.bookingId=this.bookings.bookId;

          
        }
        else{
          this.bookings=response;
          this.show = true;
        }
        
      })*/
    }
    else {
      alert("Enter TicketId")
    }
  }
  cancelBooking(){
    //sessionStorage.setItem("bookingId",)
  }
  cancelReturn(){

  }
  

  open(content: any, id: number) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        //if (`${result}` === 'Save click') this.bookings.splice(id, 1);
        this.service.cancelBooking(this.search).subscribe((response)=>{
          this.info=response;
          this.show = false;
        });


      });
  }
  cancel:CancelBooking=new CancelBooking
  open1(content: any, id: number) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        //if (`${result}` === 'Save click') this.bookings.splice(id, 1);
        this.service.cancelReturnBooking(this.cancel).subscribe((response)=>{
          this.info=response;
          this.show = false;
        });


      });
  }


  // cancel() {

  //   sessionStorage.setItem("bookingDetails",JSON.stringify(this.book));
  // }
}
