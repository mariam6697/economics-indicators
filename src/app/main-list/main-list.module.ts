import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainListComponent } from './main-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainListComponent,
  },
];

@NgModule({
  declarations: [MainListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MainListModule {}
