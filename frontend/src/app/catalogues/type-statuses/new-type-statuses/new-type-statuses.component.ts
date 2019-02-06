import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import  {TypeStatus} from "../../../models/type-statuses";
import { TypeStatusesService} from "../../../services/type-statuses.service";

@Component({
  selector: 'app-new-type-statuses',
  templateUrl: './new-type-statuses.component.html',
  styleUrls: ['./new-type-statuses.component.css']
})
export class NewTypeStatusesComponent implements OnInit {
  typeStatus: TypeStatus;
  name: string;

  constructor(
    private router: Router,
    private typeStatusesService: TypeStatusesService,

  ) { }

  ngOnInit() {
    this.typeStatus = new TypeStatus({id: null, name: null});
  }

  saveTypeStatus(typeStatus: TypeStatus) {
    this.typeStatusesService.newTypeStatus(typeStatus).subscribe(() => {
      this.router.navigate(['/type-statuses']);
    })
  }

}
