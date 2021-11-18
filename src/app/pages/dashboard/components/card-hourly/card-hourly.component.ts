import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Hourly } from 'src/app/models/hourly.model';

@Component({
  selector: 'app-card-hourly',
  templateUrl: './card-hourly.component.html',
  styleUrls: ['./card-hourly.component.scss']
})
export class CardHourlyComponent implements OnInit, AfterViewInit {

  @Input() hourly:Array<Hourly> = new Array<Hourly>();
  constructor() { }
  ngAfterViewInit(): void {
    this.hourly.forEach(x=>{
    x.dtFormat = moment(x.dt * 1000).lang('es').format('EEE, MMM d');
    x.temp = Math.round(x.temp);
  })
  }

  ngOnInit(): void {
     
  }

}
