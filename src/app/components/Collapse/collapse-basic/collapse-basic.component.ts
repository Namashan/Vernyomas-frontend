import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-collapse-basic',
  templateUrl: './collapse-basic.component.html'
})
export class CollapseBasicComponent implements OnInit {
  public isCollapsed = true;

  ngOnInit(): void {
  }
}
