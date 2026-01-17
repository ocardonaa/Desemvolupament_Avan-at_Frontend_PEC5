import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StadisticsComponent } from './stadistics/stadistics.component';
import { StadisticsRoutingModule } from './stadistics-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { GenderComponent } from './gender/gender.component';
import { ResumeDataComponent } from './resume-data/resume-data.component';
import { GeneralResultsComponent } from './general-results/general-results.component';
import { BaseChartDirective } from 'ng2-charts';

@NgModule({
  declarations: [StadisticsComponent],
  imports: [
    CommonModule, 
    StadisticsRoutingModule, 
    ScrollingModule, 
    ResumeDataComponent, 
    GenderComponent, 
    GeneralResultsComponent,
    BaseChartDirective
  ]
})
export class StadisticsModule { }
