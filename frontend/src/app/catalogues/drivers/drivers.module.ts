import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversComponent } from './drivers.component';
import { EditDriverComponent } from './edit-driver/edit-driver.component';
import { NewDriverComponent } from './new-driver/new-driver.component';

@NgModule({
  declarations: [
    DriversComponent,
    EditDriverComponent,
    NewDriverComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DriversRoutingModule,
  ]
})
export class DriversModule { }
