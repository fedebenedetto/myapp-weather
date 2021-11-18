import { Component, OnInit } from '@angular/core';
import { CurrentResponse } from 'src/app/models/current-response.model';
import { Hourly } from 'src/app/models/hourly.model';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'app-weather';
  current: CurrentResponse = new CurrentResponse();
  hourly: Array<Hourly> = new Array<Hourly>();

  constructor(private dbSrv: DashboardService) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    let data = {
      city: 'cordoba',
      unit: 'metric'
    }
    this.dbSrv.getCurrentWeatherByCityName(data).subscribe((data) => {
      if (data) {
        this.current = data;
        var req={
          lat:data.coord.lat,
          long:data.coord.lon
        };
        this.getHourly(req);
      }
    },
      (err) => {

      })
  }

  getHourly(req: any) {
    this.dbSrv.getHourly(req).subscribe((data) => {
      if (data) {
        this.hourly = data.hourly;
      }
    })
  }

}
