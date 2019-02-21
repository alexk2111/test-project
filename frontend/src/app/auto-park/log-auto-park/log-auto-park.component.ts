import { Component, OnInit } from '@angular/core';
import { Log } from "../../models/log";
import {ActivatedRoute, Params, Router} from "@angular/router";
import { LogsService } from "../../services/logs";

@Component({
  selector: 'app-log-auto-park',
  templateUrl: './log-auto-park.component.html',
  styleUrls: ['./log-auto-park.component.css']
})
export class LogAutoParkComponent implements OnInit {
  logs: Array<Log>;
  id: number;

  constructor(
    private logsService: LogsService,
    private route: ActivatedRoute,
    // private router: Router,

  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.loadLogs(this.id);
    });
  }

  loadLogs(id) {
    this.logsService.getLogs(id).subscribe((logs: Array<any>) => {
      this.logs= logs.map(item => new Log(item));
    });
  }

  deleteLog(id) {

    this.logsService.deleteLog(id).subscribe(() => {
      this.loadLogs(this.id);
    })
  }

  clearLog() {
    this.logsService.clearLog(this.id).subscribe(() => {
      this.loadLogs(this.id);
    })
  }

}
