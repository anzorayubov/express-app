import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {
  formData = [];

  getData() {
    return this.formData;
  }

  push(v) {
    this.formData.push(v);
  }
}
