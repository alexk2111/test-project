import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

import { TypeStatus } from "../../../models/type-statuses";
import { TypeStatesService} from "../../../services/type-states.service";
import {TypeStatusesService} from "../../../services/type-statuses.service";

@Component({
  selector: 'app-edit-type-statuses',
  templateUrl: './edit-type-statuses.component.html',
  styleUrls: ['./edit-type-statuses.component.css']
})
export class EditTypeStatusesComponent implements OnInit {
  typeStatus: TypeStatus;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private typeStatusesService: TypeStatusesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.loadTypeStatuses(this.id);
  }

  loadTypeStatuses(id) {
    this.typeStatusesService.getTypeStatus(id).subscribe((typeStatus: TypeStatus) => {
      this.typeStatus = new TypeStatus(typeStatus);
    })
  }
  updateTypeStatus(typeStatus: TypeStatus) {
    this.typeStatusesService.updateTypeStatus(typeStatus).subscribe(() => {
      this.router.navigate(['/type-statuses'])
    })
  }

}
