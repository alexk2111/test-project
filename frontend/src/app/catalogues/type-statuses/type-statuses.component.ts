import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { TypeStatus} from "../../models/type-statuses";
import { TypeStatusesService} from "../../services/type-statuses.service";

@Component({
  selector: 'app-type-statuses',
  templateUrl: './type-statuses.component.html',
  styleUrls: ['./type-statuses.component.css']
})
export class TypeStatusesComponent implements OnInit {
  typeStatuses: Array<TypeStatus>;
  error: string;

  constructor(
    private route: ActivatedRoute,
    private typeStatusesService: TypeStatusesService,
  ) { }

  ngOnInit() {
    this.loadTypeStatuses();
  }

  loadTypeStatuses() {
    this.typeStatusesService.getTypeStatuses().subscribe((typeStatuses: Array<any>) => {
      this.typeStatuses = typeStatuses.map(item => new TypeStatus(item));
    })
  }

  deleteTypeStatus(id) {
    this.typeStatusesService.deleteTypeStatus(id).subscribe(() =>{
      this.loadTypeStatuses();
    }, error => {
      alert('Removal is not possible. There are subordinate records !!!');
    })
  }

}
