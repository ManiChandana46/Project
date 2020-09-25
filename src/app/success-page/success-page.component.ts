import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  goHome()
  {
    sessionStorage.clear();
    this.router.navigate(['/search']);
  }

}
