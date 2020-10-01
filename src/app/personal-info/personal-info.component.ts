import { Component, OnInit } from '@angular/core';
import { Passenger } from './Passenger';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  name: string;
  age: string;
  gender: string;
  list: Passenger[];

  noOfPassenger: number;
  limit: number;
  myItem: any;

  ngOnInit() {
    this.list = [];
    this.name = '';
    this.age = '';
    this.gender = 'Male';
    this.noOfPassenger = 0;
    this.myItem = JSON.parse(sessionStorage.getItem('searchDetails'));
    this.limit = this.myItem.noOfPassengers;
    (<HTMLInputElement>document.getElementById('continue')).disabled = true;
  }

  addPassenger() {
    let addedPassenger = this.list.find((o) => o.name.toLowerCase() === this.name.toLowerCase());

    if (this.name !== '' && this.age !== '' && this.gender !== '' && addedPassenger === undefined) {

      const newItem: Passenger = {
        name: this.name,
        age: Number(this.age),
        gender: this.gender === 'Male' ? 0 : 1,
      };
      this.list.push(newItem);
      this.noOfPassenger++;
      this.name = '';
      this.age = '';
      this.gender = 'Male';
    }

    else if (this.name === '' || this.age === '')
      alert('Please fill all the required feilds');
    else {
      alert(this.name + ' already added');
    }

    if (this.noOfPassenger === this.limit) {
      (<HTMLInputElement>document.getElementById('addPass')).disabled = true;
      (<HTMLInputElement>document.getElementById('continue')).disabled = false;
    }

  }

  deleteName(index: number) {
    this.list.splice(index, 1);
    this.noOfPassenger--;
    (<HTMLInputElement>document.getElementById('addPass')).disabled = false;
    (<HTMLInputElement>document.getElementById('continue')).disabled = true;
  }
}
