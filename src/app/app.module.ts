import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material-module';
import {DatePickerComponent} from './date-picker/date-picker.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MAT_DATE_LOCALE} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { PassengersListComponent } from './passengers-list/passengers-list.component';
import { TripFormingComponent } from './trip-forming/trip-forming.component';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    PassengersListComponent,
    TripFormingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ru'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
