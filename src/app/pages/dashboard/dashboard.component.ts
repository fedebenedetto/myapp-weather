import { Component, OnInit } from '@angular/core';
import { CurrentResponse } from 'src/app/models/current-response.model';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'app-weather';
  current: CurrentResponse = new CurrentResponse();
  
  constructor(private dbSrv:DashboardService) { }

  ngOnInit(): void {
    let data = {
      city:'cordoba',
      unit:'metric'
    }
    this.dbSrv.getCurrentWeatherByCityName(data).subscribe((data)=>{
      if (data) {
        debugger;
        this.current = data;
      }
    })
  }

}
