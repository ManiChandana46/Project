import { Component, OnInit } from '@angular/core';
import {deleteFlight} from '../delete-Flight/deleteFlight';
import { DeleteFlightService } from '../delete-flight.service';
@Component({
  selector: 'app-delete-flight',
  templateUrl: './delete-flight.component.html',
  styleUrls: ['./delete-flight.component.css']
})
export class DeleteFlightComponent {
  
  constructor(private deleteFlightService : DeleteFlightService) { }

  df: deleteFlight=new deleteFlight();

  submit()
  {
    this.deleteFlightService.deleteFlight(this.df).subscribe((response) => {
    if(response.status == true)
      alert('The flight details has been deleted successfully!!');
  });
 
}

}
