import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {deleteFlight} from '../delete-Flight/deleteFlight';
@Component({
  selector: 'app-delete-flight',
  templateUrl: './delete-flight.component.html',
  styleUrls: ['./delete-flight.component.css']
})
export class DeleteFlightComponent implements OnInit {
  deleteFlightForm:FormGroup;
  constructor(
    private fb:FormBuilder
  ) { }

  df: deleteFlight=new deleteFlight();

  ngOnInit(): void {
    this.builddeleteFlightForm();
  }

  builddeleteFlightForm() :void
  {
    this.deleteFlightForm=this.fb.group({
      flightNumber:['',Validators.required]
    })
  }

  submit()
  {
    if(this.deleteFlightForm.valid)
    {
      alert(JSON.stringify(this.df));
    }
    else{
      alert('Please enter all the fields.')
    }
    
  }

}
