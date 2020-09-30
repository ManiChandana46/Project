import { Component, OnInit } from '@angular/core';
import {deleteFlight} from '../delete-Flight/deleteFlight';
@Component({
  selector: 'app-delete-flight',
  templateUrl: './delete-flight.component.html',
  styleUrls: ['./delete-flight.component.css']
})
export class DeleteFlightComponent {
  
  constructor() { }

  df: deleteFlight=new deleteFlight();

  submit()
  {
    alert('The flight details has been deleted successfully!!');
  }

}
