import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TypeStatusesComponent } from './type-statuses.component';
import { EditTypeStatusesComponent } from './edit-type-statuses/edit-type-statuses.component';
import { NewTypeStatusesComponent } from './new-type-statuses/new-type-statuses.component';
import {TypeStatusesRoutingModule} from "./type-statuses-routing.module";

@NgModule({
  declarations: [
    TypeStatusesComponent,
    EditTypeStatusesComponent,
    NewTypeStatusesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TypeStatusesRoutingModule
  ]
})
export class TypeStatusesModule { }
