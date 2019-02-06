import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutesComponent } from "./routes.component";
import { NewRouteComponent } from "./new-route/new-route.component";
import { EditRouteComponent } from "./edit-route/edit-route.component";


const routes: Routes = [
  {
    path: '',
    component: RoutesComponent,
  },
  {
    path: 'edit-route/:id',
    component: EditRouteComponent
  },
  {
    path: 'new-route',
    component: NewRouteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
