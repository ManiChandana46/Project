import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

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

}
