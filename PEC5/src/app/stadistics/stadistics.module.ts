import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StadisticsComponent } from './stadistics/stadistics.component';
import { StadisticsRoutingModule } from './stadistics-routing.module';



@NgModule({
  declarations: [StadisticsComponent],
  imports: [
    CommonModule, StadisticsRoutingModule
  ]
})
export class StadisticsModule { }
