import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicatorDetailsComponent } from './indicator-details.component';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';

const routes: Routes = [
  {
    path: '',
    component: IndicatorDetailsComponent,
  },
];

@NgModule({
  declarations: [IndicatorDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgApexchartsModule],
})
export class IndicatorDetailsModule {}
