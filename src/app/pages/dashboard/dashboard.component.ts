import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { CurrentResponse } from 'src/app/models/current-response.model';
import { Hourly } from 'src/app/models/hourly.model';
import Swal from 'sweetalert2';
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
  value: string = '';

  @ViewChild('city') city!: ElementRef;
  constructor(private dbSrv: DashboardService) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    let data = {
      city: 'cordoba',
      unit: 'metric'
    }

    this.getCurrent(data);
  }

  find() {
    var ciudad = this.city.nativeElement.value;
    let data = {
      city: ciudad,
      unit: 'metric'
    }

    this.getCurrent(data);
  }

  getCurrent(data: any) {
    debugger;
    this.dbSrv.getCurrentWeatherByCityName(data).subscribe((data) => {
      if (data) {
        this.current = data;
        var req = {
          lat: data.coord.lat,
          long: data.coord.lon
        };
        this.getHourly(req);
      }else{
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: 'Ha ocurrido un error al buscar los datos'
        });
      }
    },
      (err) => {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: err.error.message
        });
      })
  }

  getHourly(req: any) {
    this.dbSrv.getHourly(req).subscribe((data) => {
      if (data) {
        this.hourly = data.hourly;
        this.hourly.forEach(x => {
          x.dtFormat = moment(x.dt * 1000).lang('es').format('HH:mm');
          x.temp = Math.round(x.temp);
        })
      }else{
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: 'Ha ocurrido un error al buscar los datos'
        });
      }
    },
    (err) => {
      Swal.fire({
        title: 'Error',
        icon: 'error',
        text: err.error.message
      });
    })
  }

}
