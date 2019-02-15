import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoParkService } from "../services/auto-park.service";
import { AutoPark } from "../models/auto-park";
import {TypeState} from "../models/type-states";
import {TypeStatus} from "../models/type-statuses";
import {TypeStatesService} from "../services/type-states.service";
import {TypeStatusesService} from "../services/type-statuses.service";

@Component({
  selector: 'app-auto-parks',
  templateUrl: './auto-park.component.html',
  styleUrls: ['./auto-park.component.css']
})
export class AutoParkComponent implements OnInit {
  autoParks: Array<AutoPark>;
  typeStates: Array<TypeState>;
  typeStatuses: Array<TypeStatus>;
  error: string;

  constructor(
    private autoParkService: AutoParkService,
    private typeStatesService: TypeStatesService,
    private typeStatusesService: TypeStatusesService,
  ) { }

  ngOnInit() {
    this.loadTypeStates();
    this.loadTypeStatuses();
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
}
