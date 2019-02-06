import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EditTypeStatusesComponent} from "./edit-type-statuses/edit-type-statuses.component";
import {NewTypeStatusesComponent} from "./new-type-statuses/new-type-statuses.component";
import {TypeStatusesComponent} from "./type-statuses.component";

const routes: Routes = [
  {
    path: '',
    component: TypeStatusesComponent,
  },
  {
    path: 'edit-type-statuses/:id',
    component: EditTypeStatusesComponent
  },
  {
    path: 'new-type-statuses',
    component: NewTypeStatusesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeStatusesRoutingModule { }
