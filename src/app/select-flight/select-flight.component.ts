import { Component, OnInit } from '@angular/core';
import { Select } from '../select-flight/select';
import { Time } from '@angular/common';

@Component({
  selector: 'app-select-flight',
  templateUrl: './select-flight.component.html',
  styleUrls: ['./select-flight.component.css']
})
export class SelectFlightComponent implements OnInit {

  flight:Select;
  flights:Select[]=[];
  returnflights:Select[]=[];
  returnStatus:false;//no return
  returnclass="";



  constructor() { }



  ngOnInit(): void {
    this.flights=[
      new Select("Mumbai","Hyderabad","09:00","11:00",2,4000),
      new Select("Mumbai","Hyderabad","14:00","16:00",2,4000)
    ];
    this.returnflights=[
      new Select("Hyderabad","Mumbai","11:00","13:00",2,4000),
      new Select("Hyderabad","Mumbai","19:00","21:00",2,4000)
    ]

    if(this.returnflights!=null)
    {
      this.returnclass="return";
    }
  }


  


}
