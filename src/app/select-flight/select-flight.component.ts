import { Component, OnInit } from '@angular/core';
import { Select } from '../select-flight/select';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchDetails } from '../search-module/search-details';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-select-flight',
  templateUrl: './select-flight.component.html',
  styleUrls: ['./select-flight.component.css']
})
export class SelectFlightComponent implements OnInit {

  flight: Select;
  returnFlight:Select;
  flights: Select[] = [];
  returnflights: Select[] = [];
  returnclass = "";
  fly: Select;
  returnfly: Select;
  mainclass = "";
  returnstatus;
  sd: SearchDetails;
  oneWaySearch;
  ReturnSearch;
  statusMessage;




  constructor(private fb: FormBuilder, private router: Router,private service:SearchService) { }

  // setForm() {
  //   this.flightForm = this.fb.group({
  //     oneWay : ['',Validators.required],
  //     classtype1 : ['',Validators.required]
  //   });
  // }




  ngOnInit(): void {
    this.sd = JSON.parse(sessionStorage.getItem("searchDetails"));
    this.oneWaySearch=JSON.parse(sessionStorage.getItem("OneWaySearch"));
    this.ReturnSearch=JSON.parse(sessionStorage.getItem("ReturnSearch"));
    for(let i=0;i<this.oneWaySearch.length;i++)
      {
      this.flight=new Select(this.oneWaySearch[i][5],this.oneWaySearch[i][6],this.oneWaySearch[i][1],this.oneWaySearch[i][0],this.oneWaySearch[i][7],this.oneWaySearch[i][3],this.oneWaySearch[i][4],"Economy",this.oneWaySearch[i][3]);
      this.flights.push(this.flight);
      }
    if(this.ReturnSearch!=null)
    {
      for(let j=0;j<this.ReturnSearch.length;j++)
      {
      this.returnFlight=new Select(this.ReturnSearch[j][5],this.ReturnSearch[j][6],this.ReturnSearch[j][1],this.ReturnSearch[j][0],this.ReturnSearch[j][7],this.ReturnSearch[j][3],this.ReturnSearch[j][4],"Economy",this.ReturnSearch[j][3]);
      this.returnflights.push(this.returnFlight);
      }
      
    }

    // this.setForm();

    if (this.returnflights.length != 0) {
      this.returnclass = "return";
      // this.flightForm2 = this.fb.group({
      //   twoWay : ['',Validators.required],
      //   classtype2 : ['',Validators.required]
      // });

    }
    else {
      this.mainclass = "main1";
    }
  }

  classchange(e, obj) {
    if (e.target.value === "Economy") {
      obj.classprice = obj.price;
    }
    else
      obj.classprice = (obj.price + obj.price * 12 / 100);
  }

  function(f) {
    this.fly = f;
  }
  function1(rf) {
    this.returnstatus = 1;
    this.returnfly = rf;
  }

  submit() {
    if (this.fly != null) {
      console.log(this.fly);
      sessionStorage.setItem("oneWayDetails", JSON.stringify(this.fly));
      this.service.blockedSeats(this.fly.scheduleid).subscribe(data =>{
        sessionStorage.setItem("seatNames",data)});
      if (this.returnflights.length != 0 && this.returnstatus == 1) {
        console.log(this.returnfly);
        sessionStorage.setItem("returnDetails", JSON.stringify(this.returnfly));
        if (sessionStorage.getItem("login") == 'false')
          this.router.navigate(['/login']);
        else
          this.router.navigate(['/seatSelect']);
      }
      else if (this.returnflights.length == 0) {
        if (sessionStorage.getItem("login") == 'false')
          this.router.navigate(['/login']);
        else
          this.router.navigate(['/seatSelect']);
      }
      else {
        alert("Select return flight");
      }
    }
    else {
      alert("You have to select flight for proceding further");
    }
  }





}
