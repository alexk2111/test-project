import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auto-park', pathMatch: 'full',
  },
  {
    path: 'auto-park',
    loadChildren: './auto-park/auto-park.module#AutoParkModule',
    canActivate:[AuthGuard]
  },
  {
    path: 'drivers',
    loadChildren: './catalogues/drivers/drivers.module#DriversModule',
    canActivate:[AuthGuard]
  },
  {
    path: 'routes',
    loadChildren: './catalogues/routes/routes.module#RoutesModule',
    canActivate:[AuthGuard]
  },
  {
    path: 'type-cars',
    loadChildren: './catalogues/type-cars/type-cars.module#TypeCarsModule',
    canActivate:[AuthGuard]
  },
  {
    path: 'type-states',
    loadChildren: './catalogues/type-states/type-states.module#TypeStatesModule',
    canActivate:[AuthGuard]
  },
  {
    path: 'type-statuses',
    loadChildren: './catalogues/type-statuses/type-statuses.module#TypeStatusesModule',
    canActivate:[AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
