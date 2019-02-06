import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TypeCar } from "../../../models/type-car";
import { TypeCarsService } from '../../../services/type-cars.service';

@Component({
  selector: 'app-new-type-car',
  templateUrl: './new-type-car.component.html',
  styleUrls: ['./new-type-car.component.css']
})
export class NewTypeCarComponent implements OnInit {
  typeCar: TypeCar;
  name: string;

  constructor(
    private typeCarsService: TypeCarsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.typeCar = new TypeCar({id: null, name: null});
  }

  saveTypeCar(typeCar: TypeCar){
    this.typeCarsService.newTypeCar(typeCar).subscribe(() =>{
      this.router.navigate(['/type-cars']);
    })
  }
}
