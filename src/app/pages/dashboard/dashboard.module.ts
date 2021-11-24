import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from './dashboard.service';
import { CardNowComponent } from './components/card-now/card-now.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CardHourlyComponent } from './components/card-hourly/card-hourly.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CardDailyComponent } from './components/card-daily/card-daily.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CardNowComponent,
    CardHourlyComponent,
    CardDailyComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  providers:[DashboardService]
})
export class DashboardModule { }
