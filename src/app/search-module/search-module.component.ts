import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SearchDetails } from '../search-module/search-details';
import { Router } from '@angular/router';
import {SearchService} from '../search.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-search-module',
  templateUrl: './search-module.component.html',
  styleUrls: ['./search-module.component.css']
})
export class SearchModuleComponent implements OnInit {

  
  constructor(private datepipe:DatePipe,private router: Router,private searchService:SearchService, private spinner: NgxSpinnerService) { }

  sd:SearchDetails=new SearchDetails();
  infantNumber=0;
  adultNumber=1;
  childNumber=0;
  adultMinusDisable=true;
  childMinusDisable=true;
  infantMinusDisable=true;
  view=false;
  returnDisable=true;
  active="activeclass";
  returnactive="";
  Fromcities=["Hyderabad","Chennai","Mumbai","New Delhi","Bangalore"];
  Tocities=["Hyderabad","Chennai","Mumbai","New Delhi","Bangalore"];
  todayString:string=new Date().toDateString();
  todaydate;
  Errormessage;
  styleForErrorMessage;



  ngOnInit(): void {
    this.todaydate=this.datepipe.transform(this.todayString,'yyyy-MM-dd');
    this.styleForErrorMessage="";
  }


  Fromcity(e)
  {
    this.Tocities=["SelectCity","Hyderabad","Chennai","Mumbai","New Delhi","Bangalore"];
    const index:number = this.Tocities.indexOf(e.target.value);
    this.Tocities.splice(index,1);
  }

  swap()
  {  
    let temp=this.sd.cityFrom
    this.sd.cityFrom=this.sd.cityTo;
    this.sd.cityTo=temp;
    this.Tocities=["Hyderabad","Chennai","Mumbai","New Delhi","Bangalore"];
    const index:number = this.Tocities.indexOf(this.sd.cityFrom);
    this.Tocities.splice(index,1);
  }
  minus()
  {
    if(this.adultNumber>1)
    {
    this.adultMinusDisable=false;
    this.adultNumber=this.adultNumber-1;
    this.sd.noOfPassengers=this.sd.noOfPassengers-1;
    }
    if(this.adultNumber==1)
    this.adultMinusDisable=true;
  }

  plus()
  {
    this.adultMinusDisable=false;
    this.adultNumber=this.adultNumber+1;  
    this.sd.noOfPassengers=this.sd.noOfPassengers+1;
  }

  minus1()
  {
    if(this.childNumber>0)
    {
    this.childMinusDisable=false;
    this.childNumber=this.childNumber-1;
    this.sd.noOfPassengers=this.sd.noOfPassengers-1;
    }
    if(this.childNumber==0)
    this.childMinusDisable=true;
  }

  plus1()
  {
    this.childMinusDisable=false;
    this.childNumber=this.childNumber+1;  
    this.sd.noOfPassengers=this.sd.noOfPassengers+1;
  }

  minus2()
  {
    if(this.infantNumber>0)
    {
    this.infantMinusDisable=false;
    this.infantNumber=this.infantNumber-1;
    this.sd.noOfPassengers=this.sd.noOfPassengers-1;
    }
    if(this.infantNumber==0)
    this.infantMinusDisable=true;
  }

  plus2()
  {
    this.infantMinusDisable=false;
    this.infantNumber=this.infantNumber+1;  
    this.sd.noOfPassengers=this.sd.noOfPassengers+1;
  }

  show()
  {
    this.view=!this.view;
  }

  oneway()
  {
    //this.sd.journeyType="oneWay";
    this.returnDisable=true;
    this.active="activeclass";
    this.returnactive="";
  }

  return()
  {
    //this.sd.journeyType="twoWay";
    this.returnDisable=false;
    this.active="";
    this.returnactive="activeclass";
  }

  submit()
  {
    this.spinner.show();
    this.searchService.searchFlights(this.sd).subscribe((data) =>{
      if(data.statusMessage=="Successful") {
        this.spinner.hide();
        sessionStorage.setItem("searchDetails",JSON.stringify(this.sd));
        sessionStorage.setItem("OneWaySearch",JSON.stringify(data.searchResults));
        sessionStorage.setItem("ReturnSearch",JSON.stringify(data.returnResults));
       // sessionStorage.setItem("statusMessage",data.statusMessage);
        this.router.navigate(['/selectflight']);
      }
      else{
        this.spinner.hide();
        this.Errormessage=data.statusMessage;
        this.styleForErrorMessage="styleforH2";

      }
    })
  }

}
