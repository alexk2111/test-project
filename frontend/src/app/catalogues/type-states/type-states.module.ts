import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TypeStatesComponent } from './type-states.component';
import { EditTypeStatesComponent } from './edit-type-states/edit-type-states.component';
import { NewTypeStatesComponent } from './new-type-states/new-type-states.component';
import {TypeStatesRoutingModule} from "./type-states-routing.module";

@NgModule({
  declarations: [
    TypeStatesComponent,
    EditTypeStatesComponent,
    NewTypeStatesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TypeStatesRoutingModule
  ]
})
export class TypeStatesModule { }
