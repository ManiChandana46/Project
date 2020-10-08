import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-seat-select',
  templateUrl: './seat-select.component.html',
  styleUrls: ['./seat-select.component.css']
})
export class SeatSelectComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal) { }
  str: string = "";
  passengers: any;
  finalpassengers: any;
  searchDetails: any;
  disabled: any;
  seats: any;
  splittedSeats = [];
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  ngOnInit(): void {
    this.searchDetails = JSON.parse(sessionStorage.getItem('searchDetails'));
    this.seats = sessionStorage.getItem("seatNames");
    this.splittedSeats = this.seats.split(',');
    console.log(this.splittedSeats);
    this.passengers = this.searchDetails.noOfPassengers;
    this.finalpassengers = this.passengers;

  }

  forTesting(e) {
    if (this.passengers > 1) {
      this.str = this.str + e.target.value + ",";
      this.passengers--;
    }
    else if (this.passengers == 1) {
      this.str = this.str + e.target.value;
      this.passengers--;
      this.disabled = true;
    }

  }
  uncheckAll() {
    this.str = "";
    this.disabled = false;
    this.passengers = this.searchDetails.noOfPassengers;
    this.finalpassengers = this.passengers;
  }

  Continue(content: any) {
    if (this.passengers != 0) {
      this.modalService.open(content).result.then((result) => {
        if (`${result}` === 'Save click') { }
      });
    }
    else {
      sessionStorage.setItem("seats", this.str);
      this.router.navigate(['/personalInfo']);
    }
  }

  checkBlockedSeatsF(n: any) {
    let s = n + "F";
    if (this.splittedSeats.includes(s)) {
      return false;
    }
    else {
      return true;
    }
  }

  checkBlockedSeatsE(n: any) {
    let s = n + "E";
    if (this.splittedSeats.includes(s)) {
      return false;
    }
    else {
      return true;
    }
  }

  checkBlockedSeatsD(n: any) {
    let s = n + "D";
    if (this.splittedSeats.includes(s)) {
      return false;
    }
    else {
      return true;
    }
  }

  checkBlockedSeatsC(n: any) {
    let s = n + "C";
    if (this.splittedSeats.includes(s)) {
      return false;
    }
    else {
      return true;
    }
  }

  checkBlockedSeatsB(n: any) {
    let s = n + "B";
    if (this.splittedSeats.includes(s)) {
      return false;
    }
    else {
      return true;
    }
  }

  checkBlockedSeatsA(n: any) {
    let s = n + "A";
    if (this.splittedSeats.includes(s)) {
      return false;
    }
    else {
      return true;
    }
  }

}
