import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchModuleComponent } from './search-module/search-module.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { DatePipe}  from '@angular/common';
import { SelectFlightComponent } from './select-flight/select-flight.component';
import { ReviewBookingComponent } from './review-booking/review-booking.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { DeleteFlightComponent } from './delete-flight/delete-flight.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginPageComponent,
    PaymentComponent,
    SearchModuleComponent,
    AddFlightComponent,
    SelectFlightComponent,
    ReviewBookingComponent,
    PersonalInfoComponent,
    DeleteFlightComponent,
    SuccessPageComponent,
    BookingDetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
 ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
