import {Component, OnInit} from '@angular/core';
import {AutoPark} from "../../models/auto-park";
import {AutoParkService} from "../../services/auto-park.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Driver} from "../../models/driver";
import {DriversService} from "../../services/drivers.service";
import {RoutesService} from "../../services/routes.service";
import {Route} from "../../models/route";
import {TypeCar} from "../../models/type-car";
import {TypeCarsService} from "../../services/type-cars.service";
import {TypeState} from "../../models/type-states";
import {TypeStatus} from "../../models/type-statuses";
import {TypeStatesService} from "../../services/type-states.service";
import {TypeStatusesService} from "../../services/type-statuses.service";

@Component({
  selector: 'app-new-auto-park',
  templateUrl: './new-auto-park.component.html',
  styleUrls: ['./new-auto-park.component.css']
})
export class NewAutoParkComponent implements OnInit {
  autoPark: AutoPark;
  drivers: Array<Driver>;
  routes: Array<Route>;
  typeCars: Array<TypeCar>;
  typeStates: Array<TypeState>;
  typeStatuses: Array<TypeStatus>;
  id: number;

  constructor(
    private autoParkService: AutoParkService,
    private driversService: DriversService,
    private routesService: RoutesService,
    private typeCarsService: TypeCarsService,
    private typeStatesService: TypeStatesService,
    private typeStatusesService: TypeStatusesService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.autoPark = new AutoPark({
      id: null,
      name: null,
      driver_id: null,
      route_id: null,
      type_car_id: null,
      type_state_id: null,
      type_status_id: null,
      age: null,
      driver: null,
      route: null,
      type_car: null,
      type_state: null,
      type_status: null,
      tags: null
    });
    this.loadDrivers();
    this.loadRoutes();
    this.loadTypeCars();
    this.loadTypeStates();
    this.loadTypeStatuses();
  }

  saveAutoPark(autoPark: AutoPark) {
    this.autoParkService.newAutoPark(autoPark).subscribe(() => {
      this.router.navigate(['/auto-park']);
    })
  }

  loadDrivers() {
    this.driversService.getDrivers().subscribe((drivers: Array<any>) => {
      this.drivers = drivers.map(item => new Driver(item));
    }, (err) => {
      console.log(err);});
  }

  loadRoutes() {
    this.routesService.getRoutes().subscribe((routes: Array<any>) => {
      this.routes = routes.map(item => new Route(item));
    });
  }

  loadTypeCars() {
    this.typeCarsService.getTypeCars().subscribe((drivers: Array<any>) => {
      this.typeCars = drivers.map(item => new Driver(item));
    });
  }
  loadTypeStates() {
    this.typeStatesService.getTypeStates().subscribe( (typeStates: Array<any>) => {
      this.typeStates = typeStates.map(item => new TypeState(item));
    })
  }
  loadTypeStatuses() {
    this.typeStatusesService.getTypeStatuses().subscribe((typeStatuses: Array<any>) => {
      this.typeStatuses = typeStatuses.map(item => new TypeStatus(item));
    })
  }
}
