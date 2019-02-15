import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { AutoParkRoutingModule } from './auto-park-routing.module';
import { AutoParkComponent } from './auto-park.component';
import { EditAutoParkComponent } from "./edit-auto-park/edit-auto-park.component";
import { NewAutoParkComponent } from './new-auto-park/new-auto-park.component';
import { LogAutoParkComponent } from './log-auto-park/log-auto-park.component';
import { TagAutoParkComponent } from './tag-auto-park/tag-auto-park.component';

@NgModule({
  declarations: [
    AutoParkComponent,
    EditAutoParkComponent,
    NewAutoParkComponent,
    LogAutoParkComponent,
    TagAutoParkComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AutoParkRoutingModule
  ]
})
export class AutoParkModule { }
