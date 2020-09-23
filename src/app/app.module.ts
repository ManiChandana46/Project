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

import { MatCardModule } from '@angular/material/card'; 
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteBookingComponent } from './delete-booking/delete-booking.component';


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
    DashboardComponent,
    DeleteBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
 ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
