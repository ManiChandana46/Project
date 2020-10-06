import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seat-select',
  templateUrl: './seat-select.component.html',
  styleUrls: ['./seat-select.component.css']
})
export class SeatSelectComponent implements OnInit {

  constructor(private router:Router) { }
  str:string="";
  passengers;
  finalpassengers;
  searchDetails;
  disabled;

  ngOnInit(): void {
    this.searchDetails = JSON.parse(sessionStorage.getItem('searchDetails'));
    this.passengers = this.searchDetails.noOfPassengers;
    this.finalpassengers=this.passengers;
  }

  forTesting(e)
  {
    if(this.passengers>1)
    {
    this.str=this.str+e.target.value+",";
    this.passengers--;
    }
    else if(this.passengers==1)
    {
      this.str=this.str+e.target.value;
      this.passengers--;
      this.disabled=true;
    }

  }
  uncheckAll()
  {
    this.str="";
    this.disabled=false;
    this.passengers = this.searchDetails.noOfPassengers;
    this.finalpassengers=this.passengers;
  }

  Continue()
  {
    sessionStorage.setItem("seats",this.str);
    this.router.navigate(['/personalInfo']);
  }

}
