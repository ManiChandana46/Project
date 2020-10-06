import { Component, OnInit } from '@angular/core';
import {deleteFlight} from '../delete-Flight/deleteFlight';
import { DeleteFlightService } from '../delete-flight.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-delete-flight',
  templateUrl: './delete-flight.component.html',
  styleUrls: ['./delete-flight.component.css']
})
export class DeleteFlightComponent {
  
  constructor(private deleteFlightService : DeleteFlightService,
              private spinner: NgxSpinnerService,
              private modalService: NgbModal) { }

  df: deleteFlight=new deleteFlight();

  submit(content: any)
  {
    this.spinner.show();
    this.deleteFlightService.deleteFlight(this.df).subscribe((response) => {
    if(response.status == true) {
      this.spinner.hide();
      this.modalService.open(content).result.then();
      //alert('The flight details has been deleted successfully!!');
    } else {
      this.spinner.hide();
      alert('Could not delete flight');
    }
      
  });
 
}

}
