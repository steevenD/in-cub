import { NumberCofounderPipe } from './../../pipes/number-cofounder.pipe';
import {Component, Input, OnInit} from '@angular/core';
import {Startup} from '../../startup.model';
import {AddressPipe} from '../../pipes/address.pipe';
import {StartupService} from '../../services/startup.service';
import {MatDialog} from "@angular/material";
import {UpdateStartupComponent} from "../update-startup/update-startup.component";

@Component({
  selector: 'app-row-startup',
  templateUrl: './row-startup.component.html',
  styleUrls: ['./row-startup.component.css']
})
export class RowStartupComponent implements OnInit {

  @Input()
  startUp: Startup;

  @Input()
  row: string;

  displayRow;

  constructor(private addressPipe: AddressPipe, private numberCofounderPipe: NumberCofounderPipe,
    private starUpService: StartupService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getDisplayRow(this.row);
  }

  getDisplayRow(row: string) {
    switch (row) {
      case 'name': this.displayRow = this.startUp.name;break;
      case 'legalRepresentativeName': this.displayRow = this.startUp.legalRepresentativeName;break;
      case 'cofounderNumber': this.displayRow = this.numberCofounderPipe.transform(this.startUp.cofounderNumber);break;
      case 'description': this.displayRow = this.startUp.description;break;
      case 'address': this.displayRow = this.addressPipe.transform(this.startUp.address);break;
      case 'nameConsultant': this.displayRow = this.startUp.consultant.firstname;break;
    }
  }

  /**
   * to delete a startup
   * @param idStartup
   */
  handleClickDeleteStartup(idStartup: number) {
    this.starUpService.deleteStartUp(idStartup).subscribe();
  }

  /**
   * to update a startup
   * @param idStartup
   */
  handleClickUpdateStartup(startUp: Startup) {
    const dialogRef = this.dialog.open(UpdateStartupComponent, {
      width: '700px',
      data: {startUp: startUp}
    });
  }

}
