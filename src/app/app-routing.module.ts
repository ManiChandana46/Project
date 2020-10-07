import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectFlightComponent } from '../app/select-flight/select-flight.component';
import { ReviewBookingComponent} from '../app/review-booking/review-booking.component';
import { SearchModuleComponent} from '../app/search-module/search-module.component';
import {DashboardComponent} from '../app/dashboard/dashboard.component';
import{ DeleteFlightComponent} from '../app/delete-flight/delete-flight.component';
import{ LoginPageComponent } from '../app/login-page/login-page.component';
import{ PaymentComponent} from '../app/payment/payment.component';
import{ PersonalInfoComponent} from '../app/personal-info/personal-info.component';
import { RegistrationComponent} from '../app/registration/registration.component';
import{ SuccessPageComponent} from '../app/success-page/success-page.component';
import{AddFlightComponent} from '../app/add-flight/add-flight.component';
import{ BookingDetailsComponent} from '../app/booking-details/booking-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {SeatSelectComponent } from './seat-select/seat-select.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import {AboutPageComponent} from './about-page/about-page.component';



const routes: Routes = [

  { path: '',redirectTo:'search',pathMatch: 'full'},
  { path:'selectflight', component:SelectFlightComponent},
  { path:'search',component:SearchModuleComponent},
  { path:'reviewBooking',component:ReviewBookingComponent},
  { path:'dashboard',component:DashboardComponent},
  { path:'deleteFlight',component:DeleteFlightComponent},
  { path:'login',component:LoginPageComponent},
  { path:'payment',component:PaymentComponent},
  { path:'personalInfo',component:PersonalInfoComponent},
  { path:'registration',component:RegistrationComponent},
  { path:'successPage',component:SuccessPageComponent},
  { path:'addFlight',component:AddFlightComponent},
  { path:'bookingDetails',component:BookingDetailsComponent},
  { path:'forgotPassword',component:ForgotPasswordComponent},
  { path:'seatSelect',component:SeatSelectComponent},
  {path:'viewFlight',component:ViewFlightComponent},
  {path:'about',component:AboutPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
