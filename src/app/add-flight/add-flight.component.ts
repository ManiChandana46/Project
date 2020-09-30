import { Component, OnInit } from '@angular/core';
import {addFlight} from '../add-flight/addFlight';
@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent  {

  
  constructor() { }
  
  af:addFlight=new addFlight();
  Fromcities=["Hyderabad","Chennai","Mumbai","New Delhi","Banglore"];
  Tocities=["Hyderabad","Chennai","Mumbai","New Delhi","Banglore"];
  weekDay=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

  Fromcity(e)
  {
    this.Tocities=["SelectCity","Hyderabad","Chennai","Mumbai","New Delhi","Banglore"];
    const index:number = this.Tocities.indexOf(e.target.value);
    this.Tocities.splice(index,1);
  }

  submit()
  {
      alert('The new flight has been added successfully!!');
  }

}
