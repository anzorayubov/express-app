import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Service} from '../service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  form: FormGroup;
  // trigger = true; // this's for animation

  SVO: boolean;
  DME: boolean;
  VKO: boolean;
  airport: string;

  addDay = 2;
  today = new Date();
  day = this.today.getDate() + this.addDay;
  month = this.today.getMonth();
  year = this.today.getFullYear();

  minDate = new Date();
  maxDate = new Date(this.year, this.month, this.day);

  constructor(private http: HttpClient, private service: Service) {}

  ngOnInit() {
    this.form = new FormGroup({
      dateSelect: new FormControl('', []),
      directionSelect: new FormControl('', []),
      timeSelect: new FormControl('', []),
      name: new FormControl('', []),
      tabel: new FormControl('', []),
    });

    this.form.get('directionSelect').valueChanges
      .subscribe(value => {
        if (value === 'SVO') {
          this.airport = value;
          this.SVO = true;
          this.DME = false;
          this.VKO = false;
        }
        if (value === 'VKO') {
          this.airport = value;
          this.SVO = false;
          this.DME = false;
          this.VKO = true;
        }
        if (value === 'DME') {
          this.airport = value;
          this.SVO = false;
          this.DME = true;
          this.VKO = false;
        }
        // console.log(value);
      });
  }

  submit() {
    const formsData = this.form.value;
    // this.http.post('https:...', {
    //   formsData
    // });
    this.service.push(formsData);
    // console.log(formsData);
    this.form.reset();
    // this.trigger = !this.trigger; // this's for animation
  }

}
