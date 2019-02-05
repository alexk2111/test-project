import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DriversComponent} from "./drivers.component";
import {EditDriverComponent} from "./edit-driver/edit-driver.component";
import {NewDriverComponent} from "./new-driver/new-driver.component";

const routes: Routes = [
  {
    path: '',
    component: DriversComponent,
  },
  {
    path: 'edit-driver/:id',
    component: EditDriverComponent
  },
  {
    path: 'new-driver',
    component: NewDriverComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule {
}
