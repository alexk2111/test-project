import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'drivers',
    loadChildren: './catalogues/drivers/drivers.module#DriversModule',
  },
  {
    path: 'routes',
    loadChildren: './catalogues/routes/routes.module#RoutesModule',
  },
  {
    path: 'cars',
    loadChildren: './catalogues/cars/cars.module#CarsModule',
  },
  {
    path: 'states',
    loadChildren: './catalogues/states/states.module#StatesModule',
  },
  {
    path: 'statuses',
    loadChildren: './catalogues/statuses/statuses.module#StatusesModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
