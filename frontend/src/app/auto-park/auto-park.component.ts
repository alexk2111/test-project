import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoParkService } from "../services/auto-park.service";
import { AutoPark } from "../models/auto-park";

@Component({
  selector: 'app-auto-parks',
  templateUrl: './auto-park.component.html',
  styleUrls: ['./auto-park.component.css']
})
export class AutoParkComponent implements OnInit {
  autoParks: Array<AutoPark>;
  error: string;

  constructor(
    private autoParkService: AutoParkService,
  ) { }

  ngOnInit() {
    this.loadAutoPark();
  }

  loadAutoPark() {
    this.autoParkService.getAutoParks().subscribe((autoPark : Array<any>) => {
      this.autoParks = autoPark.map( item => new AutoPark(item));
    })
  }

  deleteAutoPark(id){
    this.autoParkService.deleteAutoPark(id).subscribe(() => {
      this.loadAutoPark();
    }, (err) => {
      console.log(err);
    })
  }
}
