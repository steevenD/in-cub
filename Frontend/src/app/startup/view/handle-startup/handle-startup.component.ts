import { Component, OnInit } from '@angular/core';
import {StartupService} from '../../services/startup.service';
import {Startup} from '../../startup.model';
import {SpinnerService} from "../../../shared/services/spinner.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";
import {UserService} from "../../../auth/services/user.service";

@Component({
  selector: 'app-handle-startup',
  templateUrl: './handle-startup.component.html',
  styleUrls: ['./handle-startup.component.css']
})
export class HandleStartupComponent implements OnInit {

  startUps: Startup[];

  constructor(private startUpService: StartupService, private spinnerService: SpinnerService,
              private router: Router,
              private userService: UserService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userService.connected$.subscribe(isConnected => {
      if (isConnected) {
        this.getStartUps();
        this.followModalAction();
      } else {
        this.router.navigate(['login']);
        this.snackBar.open('Connectez-vous', 'Close', {
          duration: 3000
        });
      }
    });
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
