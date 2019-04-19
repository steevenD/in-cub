import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {StartupService} from "../../services/startup.service";
import {SpinnerService} from "../../../shared/services/spinner.service";

@Component({
  selector: 'app-create-startup',
  templateUrl: './create-startup.component.html',
  styleUrls: ['./create-startup.component.css']
})
export class CreateStartupComponent implements OnInit {

  fGroup: FormGroup;

  constructor(
    private startupService: StartupService,
    private snackBar: MatSnackBar, private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this.generateForm();

  }

  generateForm() {
    this.fGroup = this.startupService.generateForm();
  }

  /**
   * call WS to create a new startUp
   */
  handleClickCreateStartup() {
    const newStartup = this.startupService.transformFormToStartUp(this.fGroup);
    this.startupService.addStartUp(newStartup).subscribe(() => {
      this.spinnerService.show();
      this.startupService.setStartupChange(true);
    },
      (err) => console.error(err),
      () => {
        this.snackBar.open('The startup has been created.', 'Close', {
          duration: 3000
        });
        this.spinnerService.hide();
      }
    );
  }
}
