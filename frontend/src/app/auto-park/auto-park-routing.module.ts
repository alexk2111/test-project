import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoParkComponent } from "./auto-park.component";
import { EditAutoParkComponent } from "./edit-auto-park/edit-auto-park.component";
import { NewAutoParkComponent } from "./new-auto-park/new-auto-park.component";
import {LogAutoParkComponent} from "./log-auto-park/log-auto-park.component";

const routes: Routes = [
  {
    path: '',
    component: AutoParkComponent,
  },
  {
    path: 'edit-auto-park/:id',
    component: EditAutoParkComponent,
  },
  {
    path: 'new-auto-park',
    component: NewAutoParkComponent,
  },
  {
    path: 'log-auto-park/:id',
    component: LogAutoParkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoParkRoutingModule { }
