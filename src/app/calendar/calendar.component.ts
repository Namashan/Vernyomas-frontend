import {Component} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styles: [`
    select.custom-select {
      margin: 0.5rem 0.5rem 0 0;
      width: auto;
    }
  `]
})
export class CalendarComponent {

  displayMonths = 2;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';
}
