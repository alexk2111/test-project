import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { TypeState} from "../../../models/type-states";
import { TypeStatesService} from "../../../services/type-states.service";

@Component({
  selector: 'app-new-type-states',
  templateUrl: './new-type-states.component.html',
  styleUrls: ['./new-type-states.component.css']
})
export class NewTypeStatesComponent implements OnInit {
  typeState: TypeState;
  name: string;

  constructor(
    private typeStatesService: TypeStatesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.typeState = new TypeState({id: null, name: null});
  }

  saveTypeState(typeState: TypeState) {
    this.typeStatesService.newTypeState(typeState).subscribe(() => {
      this.router.navigate(['/type-states'])
    })
  }

}
