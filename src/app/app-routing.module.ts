import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./main-list/main-list.module').then((m) => m.MainListModule),
  },
  {
    path: 'indicators/:indicatorName',
    loadChildren: () =>
      import('./indicator-details/indicator-details.module').then(
        (m) => m.IndicatorDetailsModule
      ),
  },
  {
    path: 'indicators/:indicatorName/values',
    loadChildren: () =>
      import('./indicator-values/indicator-values.module').then(
        (m) => m.IndicatorValuesModule
      ),
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
