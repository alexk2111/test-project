import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { TypeCarsService } from '../../services/type-cars.service';
import { TypeCar} from '../../models/type-car';
import {Driver} from "../../models/driver";

@Component({
  selector: 'app-type-cars',
  templateUrl: './type-cars.component.html',
  styleUrls: ['./type-cars.component.css']
})
export class TypeCarsComponent implements OnInit {
  typeCars: Array<TypeCar> | null = null;
  error: string;

  constructor(
    private route: ActivatedRoute,
    private typeCarsService: TypeCarsService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loadTypeCars();
  }

  loadTypeCars() {
    this.typeCarsService.getTypeCars().subscribe((drivers: Array<any>) => {
      this.typeCars = drivers.map(item => new Driver(item));
    });
  }

  deleteTypeCar(id) {
    this.typeCarsService.deleteTypeCar(id).subscribe(() => {
      this.loadTypeCars();
    }, (err) => {
      console.log(err);
    })
  }
}
