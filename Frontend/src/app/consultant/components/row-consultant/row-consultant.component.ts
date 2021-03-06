import { UpdateConsultantComponent } from './../update-consultant/update-consultant.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Consultant } from '../../consultant.model';
import { ConsultantService} from '../../services/consultant.service';
import {SpinnerService} from "../../../shared/services/spinner.service";


@Component({
  selector: 'app-row-consultant',
  templateUrl: './row-consultant.component.html',
  styleUrls: ['./row-consultant.component.css']
})
export class RowConsultantComponent implements OnInit, OnChanges {

  @Input()
  consultant: Consultant;

  @Input()
  row: string;

  displayRow;

  constructor(
    private consultantService: ConsultantService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this.getDisplayRow(this.row);
  }

  getDisplayRow(row: string) {
    switch (row) {
      case 'firstname':
        this.displayRow = this.consultant.firstname;
        break;
      case 'lastname':
        this.displayRow = this.consultant.lastname;
        break;
      case 'description':
        this.displayRow = this.consultant.description;
        break;
    }
  }

  handleClickDeleteConsultant(idConsultant: number) {
    this.consultantService.deleteConsultant(idConsultant).subscribe(() => {
        this.spinnerService.show();
        this.consultantService.setConsultantChange(true);
    },
      (err) => console.error(err),
      () => {
      this.spinnerService.hide();
        this.snackBar.open('The consultant has been deleted.', 'Close', {
          duration: 3000
        });
      });
  }

  handleClickUpdateConsultant(consultant: number) {
    const dialogRef = this.dialog.open(UpdateConsultantComponent, {
      width: '700px',
      data: {consultant: consultant}
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.consultant = changes.consultant.currentValue;
  }
}
