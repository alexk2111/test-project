import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Driver} from "../../../models/driver";
import {DriversService} from '../../../services/drivers.service';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent implements OnInit {
  driver: Driver;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private driversService: DriversService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.loadDriver(this.id);
  }

  loadDriver(id) {
    this.driversService.getDriver(id).subscribe((driver: Driver) => {
      this.driver = new Driver(driver);
    });
  }

  updateDriver(driver){
    this.driversService.updateDriver(driver).subscribe(() => {
      this.router.navigate(['/drivers']);
    });
  }

  createDriver(driver){

  }
}
