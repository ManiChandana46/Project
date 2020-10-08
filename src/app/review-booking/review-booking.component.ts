import { Component, OnInit } from '@angular/core';
import{ SearchDetails} from '../search-module/search-details'

@Component({
  selector: 'app-review-booking',
  templateUrl: './review-booking.component.html',
  styleUrls: ['./review-booking.component.css']
})
export class ReviewBookingComponent implements OnInit {
  myItem:any={};
  oneWay:any={};
  return:any=null;
  baseFare:any;
  totalFare:any;
  charges:any;
  oneWayFare:any;
  returnFare:any;
  oneWayFareCharges:any;
  returnFareCharges:any;
  passengerDetail: any;

  constructor() { }

  ngOnInit(): void {
    this.myItem=JSON.parse(sessionStorage.getItem("searchDetails"));
    this.oneWay=JSON.parse(sessionStorage.getItem("oneWayDetails"));
    if(sessionStorage.getItem("returnDetails")!==null)
    {
    console.log("Working");
    this.return=JSON.parse(sessionStorage.getItem("returnDetails"));
    this.oneWayFare=(this.oneWay.classprice)*(this.myItem.noOfPassengers);
    this.returnFare=(this.return.classprice)*(this.myItem.noOfPassengers);
    this.baseFare=this.oneWayFare+this.returnFare;
    this.charges=(this.baseFare*2/100);
    this.totalFare=this.baseFare+this.charges;
    this.oneWayFareCharges=this.oneWayFare+this.oneWayFare*0.02;
    this.returnFareCharges=this.returnFare+this.returnFare*0.02
    sessionStorage.setItem("oneWayFare",this.oneWayFareCharges);
    sessionStorage.setItem("returnFare",this.returnFareCharges);
    }
    else{
    this.baseFare=((this.oneWay.classprice)*(this.myItem.noOfPassengers));
    this.charges=(this.baseFare*2/100);
    this.totalFare=this.baseFare+this.charges; 
    sessionStorage.setItem("oneWayFare",this.baseFare+this.charges);
    }

    sessionStorage.setItem("totalFare",this.totalFare);
    this.passengerDetail = JSON.parse(
      sessionStorage.getItem('passesngersList'));
  }


}
