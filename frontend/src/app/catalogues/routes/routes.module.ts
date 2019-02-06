import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { RoutesRoutingModule } from './routes-routing.module';
import { RoutesComponent } from './routes.component';
import { NewRouteComponent } from './new-route/new-route.component';
import { EditRouteComponent } from './edit-route/edit-route.component';

@NgModule({
  declarations: [
    RoutesComponent,
    NewRouteComponent,
    EditRouteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RoutesRoutingModule
  ]
})
export class RoutesModule { }
