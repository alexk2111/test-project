import { Component, OnInit } from '@angular/core';
import {Driver} from "../../../models/driver";
import {DriversService} from '../../../services/drivers.service';
import {Router} from "@angular/router";

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
    console.log(this.driver);
  }

  saveDriver(driver: Driver){
    this.driversService.newDriver(driver).subscribe(() =>{
      this.router.navigate(['/drivers']);
    })

  }

}
