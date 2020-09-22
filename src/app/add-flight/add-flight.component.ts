import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {addFlight} from '../add-flight/addFlight';
@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  addFlightForm:FormGroup;
  constructor(
    private fb:FormBuilder
  ) { }
  
  af:addFlight=new addFlight();
  Fromcities=["Hyderabad","Chennai","Mumbai","New Delhi","Banglore"];
  Tocities=["Hyderabad","Chennai","Mumbai","New Delhi","Banglore"];
  weekDay=["Sunday","Monday","Tueaday","Wednesday","Thrusday","Friday","Saturday"];

  ngOnInit(): void {
    this.buildAddFlightForm();
  }

  buildAddFlightForm() : void
  {
    this.addFlightForm=this.fb.group({
      flightNumber:['',Validators.required],
      from:['',Validators.required],
      to:['',Validators.required],
      departureTime:['',Validators.required],
      arrivalTime:['',Validators.required],
      weekDay:['',Validators.required],
      cabin:['',Validators.required]

    })
  }

  Fromcity(e)
  {
    this.Tocities=["Hyderabad","Chennai","Mumbai","New Delhi","Banglore"];
    const index:number = this.Tocities.indexOf(e.target.value);
    this.Tocities.splice(index,1);
  }

  submit()
  {
    alert(JSON.stringify(this.af));
  }
}
