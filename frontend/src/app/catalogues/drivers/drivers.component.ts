import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DriversService} from '../../services/drivers.service';
import {Driver} from '../../models/driver';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})

export class DriversComponent implements OnInit {
  drivers: Array<Driver> | null = null;
  error: string;

  constructor(
    private route: ActivatedRoute,
    private driversService: DriversService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loadDrivers();
  }

  loadDrivers() {
    this.driversService.getDrivers().subscribe((drivers: Array<any>) => {
      this.drivers = drivers.map(item => new Driver(item));
    });
  }

  deleteDriver(id) {
    this.driversService.deleteDriver(id).subscribe(() => {
      this.loadDrivers();
    }, error => {
      alert('Removal is not possible. There are subordinate records !!!');
    })
  }
}
