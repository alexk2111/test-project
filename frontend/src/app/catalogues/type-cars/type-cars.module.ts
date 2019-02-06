import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TypeCarsRoutingModule } from "./type-cars-routing.module";
import { TypeCarsComponent } from './type-cars.component';
import { EditTypeCarComponent } from './edit-type-car/edit-type-car.component';
import { NewTypeCarComponent } from './new-type-car/new-type-car.component';

@NgModule({
  declarations: [
    TypeCarsComponent,
    EditTypeCarComponent,
    NewTypeCarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TypeCarsRoutingModule
  ]
})
export class TypeCarsModule { }
