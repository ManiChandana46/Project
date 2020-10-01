import { Component, OnInit } from '@angular/core';
import {addFlight} from '../add-flight/addFlight';
import { AddFlightService } from '../add-flight.service';
@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent  {

  
  constructor(private addFlightService : AddFlightService) { }
  
  af:addFlight=new addFlight();
  Fromcities=["Hyderabad","Chennai","Mumbai","New Delhi","Bangalore"];
  Tocities=["Hyderabad","Chennai","Mumbai","New Delhi","Bangalore"];

  Fromcity(e)
  {
    this.Tocities=["SelectCity","Hyderabad","Chennai","Mumbai","New Delhi","Bangalore"];
    const index:number = this.Tocities.indexOf(e.target.value);
    this.Tocities.splice(index,1);
  }

  submit()
  {
    //alert(JSON.stringify(this.af));  
    //alert('The new flight has been added successfully!!');
    this.addFlightService.addFlight(this.af).subscribe(response =>{
      if(response.status == true) {
        alert('The new flight has been added successfully!!');
      }
      else {
        alert('Could not add flight');
      }
    })
  }

}
