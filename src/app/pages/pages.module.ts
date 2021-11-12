import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ComponentsModule } from '../shared/components/components.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DashboardModule,
    ComponentsModule,
    MatCardModule
  ]
})
export class PagesModule { }
