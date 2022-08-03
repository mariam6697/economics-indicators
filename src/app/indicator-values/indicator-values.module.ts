import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicatorValuesComponent } from './indicator-values.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: IndicatorValuesComponent,
  },
];

@NgModule({
  declarations: [IndicatorValuesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbPaginationModule,
  ],
})
export class IndicatorValuesModule {}
