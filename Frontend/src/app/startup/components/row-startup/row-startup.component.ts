import { NumberCofounderPipe } from './../../pipes/number-cofounder.pipe';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Startup } from '../../startup.model';
import { AddressPipe } from '../../pipes/address.pipe';
import { StartupService } from '../../services/startup.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { UpdateStartupComponent } from '../update-startup/update-startup.component';
import {SpinnerService} from "../../../shared/services/spinner.service";

@Component({
  selector: 'app-row-startup',
  templateUrl: './row-startup.component.html',
  styleUrls: ['./row-startup.component.css']
})
export class RowStartupComponent implements OnInit, OnChanges {

  @Input()
  startUp: Startup;

  @Input()
  row: string;

  displayRow;

  constructor(
    private addressPipe: AddressPipe,
    private numberCofounderPipe: NumberCofounderPipe,
    private starUpService: StartupService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this.getDisplayRow(this.row);
  }

  getDisplayRow(row: string) {
    switch (row) {
      case 'name':
        this.displayRow = this.startUp.name;
        break;
      case 'legalRepresentativeName':
        this.displayRow = this.startUp.legalRepresentativeName;
        break;
      case 'cofounderNumber':
        this.displayRow = this.numberCofounderPipe.transform(this.startUp.cofounderNumber);
        break;
      case 'description':
        this.displayRow = this.startUp.description;
        break;
      case 'address':
        this.displayRow = this.addressPipe.transform(this.startUp.address);
        break;
      case 'nameConsultant':
        this.displayRow = this.startUp.consultant.firstname;
        break;
    }
  }

  handleClickDeleteStartup(idStartup: number) {
    this.starUpService.deleteStartUp(idStartup).subscribe(() => {
      this.spinnerService.show();
      this.starUpService.setStartupChange(true);
    },
      (err) => console.error(err),
      () => {
      this.spinnerService.hide();
        this.snackBar.open('The startup has been deleted.', 'Close', {
          duration: 3000
        });
      });
  }

  handleClickUpdateStartup(startUp: Startup) {
    const dialogRef = this.dialog.open(UpdateStartupComponent, {
      width: '700px',
      data: {startUp: startUp}
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.startUp = changes.startUp.currentValue;
  }
}
