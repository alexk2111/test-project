import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Driver} from "../../../models/driver";
import {DriversService} from '../../../services/drivers.service';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.css']
})
export class NewDriverComponent implements OnInit {
  driver: Driver;
  name: string;

  constructor(
    private driversService: DriversService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.driver = new Driver({id: null, name: null});
  }

  saveDriver(driver: Driver){
    this.driversService.newDriver(driver).subscribe(() =>{
      this.router.navigate(['/drivers']);
    })

  }

}
