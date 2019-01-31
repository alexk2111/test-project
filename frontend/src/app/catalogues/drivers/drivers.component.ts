import {Component, OnInit} from '@angular/core';
import {DriversService} from '../../services/drivers.service';
import {Driver} from '../../models/driver';
import {ActivatedRoute, Router} from '@angular/router';

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
  ) {}

  ngOnInit() {
    this.loadDrivers();
  }

  loadDrivers() {
    this.driversService.getDrivers().subscribe((drivers: Array<any>) => {
        this.drivers = drivers.map(item => new Driver(item));
      }
      // , error => {
      //   this.error = error;
      // }
    );
  }

  deleteDriver(id) {
    this.driversService.deleteDriver(id).subscribe(() => {
      this.router.navigate(['/drivers']);
    }, (err) => {
      console.log(err);
    })
  }
}
