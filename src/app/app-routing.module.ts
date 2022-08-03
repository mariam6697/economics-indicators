import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./main-list/main-list.module').then((m) => m.MainListModule),
  },
  {
    path: 'indicators/:indicatorName/values',
    loadChildren: () =>
      import('./indicator-values/indicator-values.module').then(
        (m) => m.IndicatorValuesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
