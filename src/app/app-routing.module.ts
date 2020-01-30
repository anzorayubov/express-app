import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DatePickerComponent} from './date-picker/date-picker.component';
import {TripFormingComponent} from './trip-forming/trip-forming.component';
import {PassengersListComponent} from './passengers-list/passengers-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'form', pathMatch: 'full'},
  {path: 'form', component: DatePickerComponent},
  {path: 'passengers-list', component: PassengersListComponent},
  {path: 'trip-forming', component: TripFormingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
