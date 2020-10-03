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
  x=1;
  baseFare
  totalFare;
  charges;

  constructor() { }

  ngOnInit(): void {
    this.myItem=JSON.parse(sessionStorage.getItem("searchDetails"));
    this.oneWay=JSON.parse(sessionStorage.getItem("oneWayDetails"));
    if(sessionStorage.getItem("returnDetails")!==null)
    {
    console.log("Working");
    this.return=JSON.parse(sessionStorage.getItem("returnDetails"));
    this.baseFare=((this.oneWay.classprice)+(this.return.classprice))*(this.myItem.noOfPassengers);
    this.charges=(this.baseFare*2/100);
    this.totalFare=this.baseFare+this.charges;
    }
    else{
    this.baseFare=((this.oneWay.classprice)*(this.myItem.noOfPassengers));
    this.charges=(this.baseFare*2/100);
    this.totalFare=this.baseFare+this.charges; 
    }

    sessionStorage.setItem("totalFare",this.totalFare);



  }


}
