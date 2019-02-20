import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoutesService} from "../../services/routes.service";
import { Route} from "../../models/route";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
  routes: Array<Route>;
  error: string;

  constructor(
    private route: ActivatedRoute,
    private routesService: RoutesService,

  ) { }

  ngOnInit() {
    this.loadRoutes();
  }

  loadRoutes() {
    this.routesService.getRoutes().subscribe((routes: Array<any>) => {
      this.routes = routes.map(item => new Route(item));
    });
  }

  deleteRoute(id) {
    this.routesService.deleteRoute(id).subscribe(() => {
      this.loadRoutes();
    }, error => {
      alert('Removal is not possible. There are subordinate records !!!');
    })
  }

}
