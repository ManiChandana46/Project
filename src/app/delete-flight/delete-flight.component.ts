import { Component, OnInit } from '@angular/core';
import { deleteFlight } from '../delete-Flight/deleteFlight';
import { DeleteFlightService } from '../delete-flight.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-delete-flight',
  templateUrl: './delete-flight.component.html',
  styleUrls: ['./delete-flight.component.css']
})
export class DeleteFlightComponent {

  message : string;

  constructor(private deleteFlightService: DeleteFlightService,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal) { }

  df: deleteFlight = new deleteFlight();

  submit(content: any) {
    this.spinner.show();
    this.deleteFlightService.deleteFlight(this.df).subscribe((response) => {
      if (response.status == true) {
        this.spinner.hide();
        this.message = 'Flight Deleted Successfully';
        this.modalService.open(content).result.then();
      } else {
        this.spinner.hide();
        this.message = 'Could not delete flight';
        this.modalService.open(content).result.then();
      }

    });

  }

}
