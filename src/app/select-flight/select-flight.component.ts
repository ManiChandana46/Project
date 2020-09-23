import { Component, OnInit } from '@angular/core';
import { Select } from '../select-flight/select';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms'

@Component({
  selector: 'app-select-flight',
  templateUrl: './select-flight.component.html',
  styleUrls: ['./select-flight.component.css']
})
export class SelectFlightComponent implements OnInit {

  flight: Select;
  flights: Select[] = [];
  returnflights: Select[] = [];
  returnclass = "";
  fly: Select;
  returnfly: Select;
  mainclass = "";
  type = "Economy";
  // flightForm: FormGroup;




  constructor(private fb: FormBuilder) { }

  // setForm() {
  //   this.flightForm = this.fb.group({
  //     oneWay : ['',Validators.required],
  //     classtype1 : ['',Validators.required]
  //   });
  // }



  ngOnInit(): void {

    
    this.flights = [
      new Select("Mumbai", "Hyderabad", "09:00", "11:00", 2, 4000, 101, "Economy", 4000),
      new Select("Mumbai", "Hyderabad", "14:00", "16:00", 2, 4400, 102, "Economy", 4400)
    ];
    this.returnflights=[
      new Select("Hyderabad","Mumbai","11:00","13:00",2,4500,103,"Economy",4500),
      new Select("Hyderabad","Mumbai","19:00","21:00",2,4900,104,"Economy",4900)
    ]

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
    this.returnfly = rf;
  }

  submit() {
    console.log(this.fly);
    console.log(this.returnfly);
    sessionStorage.setItem("oneWayDetails",JSON.stringify(this.fly));
    sessionStorage.setItem("returnDetails",JSON.stringify(this.returnfly));
  }





}
