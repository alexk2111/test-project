import { Component, OnInit } from '@angular/core';
import { TypeStatesService } from "../../services/type-states.service";
import { TypeState } from "../../models/type-states";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-type-states',
  templateUrl: './type-states.component.html',
  styleUrls: ['./type-states.component.css']
})
export class TypeStatesComponent implements OnInit {
  typeStates: Array<TypeState>;
  error: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private typeStatesService: TypeStatesService,
  ) { }

  ngOnInit() {
    this.loadTypeStates()
  }

  loadTypeStates() {
    this.typeStatesService.getTypeStates().subscribe( (typeStates: Array<any>) => {
      this.typeStates = typeStates.map(item => new TypeState(item));
    })
  }

  deleteTypeState(id) {
    this.typeStatesService.deleteTypeState(id).subscribe(() => {
      this.loadTypeStates()
    }, error => {
      alert('Removal is not possible. There are subordinate records !!!');
    })
  }

}
