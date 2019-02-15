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
  selector: 'app-edit-auto-park',
  templateUrl: './edit-auto-park.component.html',
  styleUrls: ['./edit-auto-park.component.css']
})
export class EditAutoParkComponent implements OnInit {
  autoPark: AutoPark;
  drivers: Array<Driver>;
  routes: Array<Route>;
  typeCars: Array<TypeCar>;
  typeStates: Array<TypeState>;
  typeStatuses: Array<TypeStatus>;
  id: number;
  showTagsButton: string;
  showId:boolean;

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
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.loadAutoPark(this.id);
    });
    this.loadDrivers();
    this.loadRoutes();
    this.loadTypeCars();
    this.loadTypeStates();
    this.loadTypeStatuses();
    this.showTagsButton = 'ShowTags';
    this.showId = false;

  }

  loadAutoPark(id) {
    this.autoParkService.getAutoPark(id).subscribe((autoPark: AutoPark) => {
      this.autoPark = new AutoPark(autoPark);
    });
  }

  updateAutoPark(autoPark) {
    this.autoParkService.updateAutoPark(autoPark).subscribe(() => {
      this.router.navigate(['/auto-park']);
    });
  }

  loadDrivers() {
    this.driversService.getDrivers().subscribe((drivers: Array<any>) => {
      this.drivers = drivers.map(item => new Driver(item));
    });
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
    this.typeStatesService.getTypeStates().subscribe((typeStates: Array<any>) => {
      this.typeStates = typeStates.map(item => new TypeState(item));
    })
  }

  loadTypeStatuses() {
    this.typeStatusesService.getTypeStatuses().subscribe((typeStatuses: Array<any>) => {
      this.typeStatuses = typeStatuses.map(item => new TypeStatus(item));
    })
  }

  showHideTags() {
    if (!this.showId) {
      this.showTagsButton = 'HideTags';
    } else {
      this.showTagsButton = 'ShowTags';
      this.loadAutoPark(this.autoPark.id);
    }
    this.showId = !this.showId;
  }

}
