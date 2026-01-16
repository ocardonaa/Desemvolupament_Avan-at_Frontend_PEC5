import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListRoutingModule } from './list-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule, ListRoutingModule, ScrollingModule
  ]
})
export class ListModule { }
