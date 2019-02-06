import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Route } from "../../../models/route";
import { RoutesService } from "../../../services/routes.service";

@Component({
  selector: 'app-edit-route',
  templateUrl: './edit-route.component.html',
  styleUrls: ['./edit-route.component.css']
})
export class EditRouteComponent implements OnInit {
  route: Route;
  id: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private routesService: RoutesService,

  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.loadRoute(this.id);
  }

  loadRoute(id) {
    this.routesService.getRoute(id).subscribe((route: Route) => {
      this.route = new Route(route);
    });
  }

  updateRoute(route){
    this.routesService.updateRoute(route).subscribe(() => {
      this.router.navigate(['/routes']);
    });
  }
}
