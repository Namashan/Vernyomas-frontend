import { Component, OnInit } from '@angular/core';
import {MeasureService} from '../measure.service';
import {MedicalMeteorology} from '../../interfaces/medical-meteorology';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers: [MeasureService],
})
export class ChartComponent implements OnInit {
  servicedata: any;
  data: MeasureService[];

  constructor(private MeasureService:MeasureService) { }

  ngOnInit() {
    //this.getData();
  }

  // getData(){
  //   this.MeasureService.getData().subscribe(data=>{
  //     this.data=data;
  //     console.log(this.data)
  //   })
  // }

}
