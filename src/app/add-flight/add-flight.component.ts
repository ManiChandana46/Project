import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { addFlight } from '../add-flight/addFlight';
import { AddFlightService } from '../add-flight.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css'],
})
export class AddFlightComponent implements OnInit {
  todayString: string = new Date().toDateString();
  todaydate;

  constructor(
    private addFlightService: AddFlightService,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal,
    private datepipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.todaydate = this.datepipe.transform(this.todayString, 'yyyy-MM-dd');
  }

  af: addFlight = new addFlight();
  Fromcities = ['Hyderabad', 'Chennai', 'Mumbai', 'New Delhi', 'Bangalore'];
  Tocities = ['Hyderabad', 'Chennai', 'Mumbai', 'New Delhi', 'Bangalore'];

  Fromcity(e: any) {
    this.Tocities = [
      'SelectCity',
      'Hyderabad',
      'Chennai',
      'Mumbai',
      'New Delhi',
      'Bangalore',
    ];
    const index: number = this.Tocities.indexOf(e.target.value);
    this.Tocities.splice(index, 1);
  }

  submit(content: any) {
    this.spinner.show();
    this.addFlightService.addFlight(this.af).subscribe((response) => {

      if (response.status == true) {
        this.spinner.hide();
        this.modalService.open(content).result.then();
      } else {
        this.spinner.hide();
        alert('Could not add flight');
      }
    });
  }
}
