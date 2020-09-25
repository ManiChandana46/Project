import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectFlightComponent } from '../app/select-flight/select-flight.component';
import { ReviewBookingComponent} from '../app/review-booking/review-booking.component';
import { SearchModuleComponent} from '../app/search-module/search-module.component';

const routes: Routes = [

  { path: '',redirectTo:'search',pathMatch: 'full'},
  { path:'selectflight', component:SelectFlightComponent},
  { path:'search',component:SearchModuleComponent},
  { path:'reviewBooking',component:ReviewBookingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
