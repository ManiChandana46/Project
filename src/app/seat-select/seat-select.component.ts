import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat-select',
  templateUrl: './seat-select.component.html',
  styleUrls: ['./seat-select.component.css']
})
export class SeatSelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  forTesting(e)
  {
    console.log(e.target.value)
  }

}
