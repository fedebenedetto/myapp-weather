import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CurrentResponse } from 'src/app/models/current-response.model';

@Component({
  selector: 'app-card-now',
  templateUrl: './card-now.component.html',
  styleUrls: ['./card-now.component.scss']
})
export class CardNowComponent implements OnInit,AfterViewInit {

  fecha:any;
  @Input() current: CurrentResponse = new CurrentResponse();
  constructor() { }
  ngAfterViewInit(): void {
    this.fecha = moment(this.current.dt * 1000).lang('es').format('dddd DD MMMM YYYY');

    this.current.main.temp = Math.round(this.current.main.temp);
    this.current.main.feels_like = Math.round(this.current.main.feels_like);
  }

  ngOnInit(): void {
    
  }

}
