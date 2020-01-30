import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  navLinks = [
    {
      path: 'form',
      label: 'Регистрация заявки'
    },
    {
      path: 'passengers-list',
      label: 'Список пассажиров'
    },
    {
      path: 'trip-forming',
      label: 'Формирование рейса'
    }
  ];
}
