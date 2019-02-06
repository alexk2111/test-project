import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import { TypeState } from "../../../models/type-states";
import { TypeStatesService} from "../../../services/type-states.service";

@Component({
  selector: 'app-edit-type-states',
  templateUrl: './edit-type-states.component.html',
  styleUrls: ['./edit-type-states.component.css']
})
export class EditTypeStatesComponent implements OnInit {
  typeState: TypeState;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private typeStatesService: TypeStatesService,

  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.loadTypeState(this.id);
  }

  loadTypeState(id) {
    this.typeStatesService.getTypeState(id).subscribe((typeState: TypeState) => {
      this.typeState = new TypeState(typeState);
    })
  }

  updateTypeState(typeState) {
    this.typeStatesService.updateTypeState(typeState).subscribe(() => {
      this.router.navigate(['/type-states'])
    })
  }

}
