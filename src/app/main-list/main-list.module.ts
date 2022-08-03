import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainListRoutingModule } from './main-list-routing.module';
import { MainListComponent } from './main-list.component';


@NgModule({
  declarations: [
    MainListComponent
  ],
  imports: [
    CommonModule,
    MainListRoutingModule
  ]
})
export class MainListModule { }
