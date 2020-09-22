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

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginPageComponent,
    PaymentComponent,
    SearchModuleComponent,
    AddFlightComponent
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
