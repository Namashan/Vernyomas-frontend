import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ngbd-dropdown-basic',
  templateUrl: './dropdown-basic.component.html'
})
export class DropDownBasicComponent implements OnInit {
  selectedValue: string;
  options: string [];
  constructor() {
    this.options = ['Nő', 'Férfi', 'Egyéb']
  }
  ngOnInit() {
  }

  onCLick(opt: string) {
    this.selectedValue = opt;
  }
}
