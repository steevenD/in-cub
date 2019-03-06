import { Consultant } from './../../consultant.model';
import { Component, OnInit } from '@angular/core';
import {ConsultantService} from '../../services/consultant.service';
import {SpinnerService} from "../../../shared/services/spinner.service";
import {UserService} from "../../../auth/services/user.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-handle-consultant',
  templateUrl: './handle-consultant.component.html',
  styleUrls: ['./handle-consultant.component.css']
})
export class HandleConsultantComponent implements OnInit {

  consultants: Consultant[];

  constructor(private consultantService: ConsultantService,
              private spinnerService: SpinnerService,
              private userService: UserService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userService.connected$.subscribe(isConnected => {
      if (isConnected) {
        this.getConsultants();
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
    const s = this.consultantService.consuultantsChange$.subscribe(value => {
      if (value) {
        this.getConsultants();
      }
    });
  }

  getConsultants() {
    this.consultantService.getConsultants().subscribe(consultants => {
      this.spinnerService.show();
      this.consultants = consultants;
    },
      (err) => console.error(err),
      () => {
        this.spinnerService.hide();
      });
  }
}
