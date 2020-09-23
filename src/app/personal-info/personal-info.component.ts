import { Component, OnInit } from '@angular/core';
import { Passenger } from './Passenger';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  name: string;
  age: string;
  gender: string;
  list: Passenger[];

  ngOnInit() {
    this.list = [];
    this.name = '';
    this.age = '';
    this.gender = 'Male';
  }

  addPassenger() {
    if (this.name !== '' && this.age !== '' && this.gender !== '') {
      const newItem: Passenger = {
        name: this.name,
        age: this.age,
        gender: this.gender,
      };
      this.list.push(newItem);

      this.name = '';
      this.age = '';
      this.gender = 'Male';
    }
  }

  deleteName(index: number) {
    this.list.splice(index, 1);
  }

}
