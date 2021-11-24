import { Component, Input, OnInit } from '@angular/core';
import { Daily } from 'src/app/models/daily.model';

@Component({
  selector: 'app-card-daily',
  templateUrl: './card-daily.component.html',
  styleUrls: ['./card-daily.component.scss']
})
export class CardDailyComponent implements OnInit {

  @Input() dailyWeather: Array<Daily> = new Array<Daily>();
  constructor() { }

  ngOnInit(): void {
  }

}
