import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Route} from "../../../models/route";
import { RoutesService} from "../../../services/routes.service";
import {Driver} from "../../../models/driver";

@Component({
  selector: 'app-new-route',
  templateUrl: './new-route.component.html',
  styleUrls: ['./new-route.component.css']
})
export class NewRouteComponent implements OnInit {
  route: Route;
  name: string;

  constructor(
    private router: Router,
    private routesService: RoutesService

  ) { }

  ngOnInit() {
    this.route = new Route({id: null, name: null});
  }

  saveRoute(route: Route){
    this.routesService.newRoute(route).subscribe(() =>{
      this.router.navigate(['/routes']);
    })

  }

}
