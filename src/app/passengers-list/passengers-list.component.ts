import {Component, OnInit} from '@angular/core';
import {Service} from '../service';

@Component({
  selector: 'app-passengers-list',
  templateUrl: './passengers-list.component.html',
  styleUrls: ['./passengers-list.component.scss']
})
export class PassengersListComponent implements OnInit {
  svoDme = [];
  svoKhvr = [];
  svoEgr = [];
  dmeSvo = [];
  egrSvo = [];
  khvrSvo = [];
  vkoDme = [];
  vkoEgr = [];
  dmeVko = [];
  egrVko = [];


  constructor(private service: Service) {}

  ngOnInit() {
    this.service.getData();
    this.filter();

  }

  filter() {
    this.service.formData.filter((v) => {
      if (v.directionSelect === 'SVO-DME') {
        this.svoDme = this.service.formData;
      }
      if (v.directionSelect === 'SVO-KHOVRINO') {
        this.svoKhvr = this.service.formData;
      }
      if (v.directionSelect === 'SVO-EGOREVSK') {
        this.svoEgr = this.service.formData;
      }
      if (v.directionSelect === 'DME-SVO') {
        this.dmeSvo = this.service.formData;
      }
      if (v.directionSelect === 'SVO-EGOREVSK') {
        this.svoEgr = this.service.formData ;
      }
      if (v.directionSelect === 'KHOVRINO-SVO') {
        this.khvrSvo = this.service.formData;
      }
      if (v.directionSelect === 'VKO-DME') {
        this.vkoDme = this.service.formData;
      }
      if (v.directionSelect === 'VKO-EGOREVSK') {
        this.vkoEgr = this.service.formData;
      }
      if (v.directionSelect === 'DME-VKO') {
        this.dmeVko = this.service.formData;
      }
      if (v.directionSelect === 'EGOREVSK-VKO') {
        this.egrVko = this.service.formData;
      }
    });
    console.log(this.service.formData);
  }

  // remove(id: number) {
  //   this.data = this.data.filter();
  // }
}
