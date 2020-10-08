import { Component, OnInit } from '@angular/core';
import { ViewFlightService } from '../view-flight.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent implements OnInit {

  data: Array<any>;
  totalRecords: Number;
  page: Number = 1;

  constructor(private viewFlightService: ViewFlightService,
    private spinner: NgxSpinnerService) {
    this.data = new Array<any>();
  }

  ngOnInit(): void {
    this.spinner.show();
    this.viewFlightService.viewFlight().subscribe((response) => {
      this.spinner.hide();
      this.data = response;
      this.totalRecords = this.data.length;
    })
  }

}
