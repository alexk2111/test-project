import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TypeStatesComponent} from "./type-states.component";
import {EditTypeStatesComponent} from "./edit-type-states/edit-type-states.component";
import {NewTypeStatesComponent} from "./new-type-states/new-type-states.component";

const routes: Routes = [
  {
    path: '',
    component: TypeStatesComponent,
  },
  {
    path: 'edit-type-states/:id',
    component: EditTypeStatesComponent
  },
  {
    path: 'new-type-states',
    component: NewTypeStatesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeStatesRoutingModule { }
