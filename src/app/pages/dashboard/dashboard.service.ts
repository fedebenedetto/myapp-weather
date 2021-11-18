import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HourlyResponse } from 'src/app/models/hourly-response.model';
import { environment } from 'src/environments/environment';
import { CurrentResponse } from '../../models/current-response.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private API_URL: string = environment.URL + '/data/2.5';
  private API_KEY: string = environment.openWeatherApiKey;
  private LANG:string = '&lang=es';
  constructor(private http: HttpClient) { }

  getCurrentWeatherByCityName(data:any): Observable<CurrentResponse> {
    var response = this.http.get<CurrentResponse>(`${this.API_URL}/weather?q=${data.city}&units=${data.unit}&appid=${this.API_KEY}${this.LANG}`);
    return response;
  }

  getHourly(data:any):Observable<HourlyResponse>{
    var response = this.http.get<HourlyResponse>(`${this.API_URL}/onecall?lat=${data.lat}&lon=${data.long}&units=metric&appid=${this.API_KEY}${this.LANG}`);
    return response;
  }
}
