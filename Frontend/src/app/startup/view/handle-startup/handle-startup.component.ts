import { Component, OnInit } from '@angular/core';
import {StartupService} from '../../services/startup.service';
import {Startup} from '../../startup.model';
import {SpinnerService} from "../../../shared/services/spinner.service";

@Component({
  selector: 'app-handle-startup',
  templateUrl: './handle-startup.component.html',
  styleUrls: ['./handle-startup.component.css']
})
export class HandleStartupComponent implements OnInit {

  startUps: Startup[];

  constructor(private startUpService: StartupService, private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.getStartUps();
    this.followModalAction();
  }

  followModalAction() {
    const s = this.startUpService.startuupsChange$.subscribe(value => {
      if (value) {
        this.getStartUps();
      }
    });
  }

  getStartUps() {
    this.startUpService.getStartUps().subscribe(startups => {
        this.spinnerService.show();
        this.startUps = startups;
    },
      (err) => console.error(err),
      () => {
        this.spinnerService.hide();
      });
  }
}
