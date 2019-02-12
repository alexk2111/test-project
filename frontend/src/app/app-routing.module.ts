import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auto-park', pathMatch: 'full'
  },
  {
    path: 'auto-park',
    loadChildren: './auto-park/auto-park.module#AutoParkModule',
  },
  {
    path: 'drivers',
    loadChildren: './catalogues/drivers/drivers.module#DriversModule',
  },
  {
    path: 'routes',
    loadChildren: './catalogues/routes/routes.module#RoutesModule',
  },
  {
    path: 'type-cars',
    loadChildren: './catalogues/type-cars/type-cars.module#TypeCarsModule',
  },
  {
    path: 'type-states',
    loadChildren: './catalogues/type-states/type-states.module#TypeStatesModule',
  },
  {
    path: 'type-statuses',
    loadChildren: './catalogues/type-statuses/type-statuses.module#TypeStatusesModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
