import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TypeCarsComponent} from "./type-cars.component";
import {EditTypeCarComponent} from "./edit-type-car/edit-type-car.component";
import {NewTypeCarComponent} from "./new-type-car/new-type-car.component";

const routes: Routes = [
  {
    path: '',
    component: TypeCarsComponent,
  },
  {
    path: 'edit-type-car/:id',
    component: EditTypeCarComponent
  },
  {
    path: 'new-type-car',
    component: NewTypeCarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeCarsRoutingModule {
}
