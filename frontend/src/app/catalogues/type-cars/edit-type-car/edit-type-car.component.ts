import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import { TypeCar } from "../../../models/type-car";
import { TypeCarsService } from '../../../services/type-cars.service';

@Component({
  selector: 'app-edit-type-car',
  templateUrl: './edit-type-car.component.html',
  styleUrls: ['./edit-type-car.component.css']
})
export class EditTypeCarComponent implements OnInit {
  typeCar: TypeCar;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private typeCarsService: TypeCarsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.loadTypeCar(this.id);
  }

  loadTypeCar(id){
    this.typeCarsService.getTypeCar(id).subscribe((typeCar: TypeCar) => {
      this.typeCar = new TypeCar(typeCar);
    });
  }

  updateTypeCar(typeCar){
    this.typeCarsService.updateTypeCar(typeCar).subscribe(() => {
      this.router.navigate(['/type-cars']);
    })
  }
}
