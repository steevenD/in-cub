import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Startup} from "../../startup.model";
import {MatPaginator, MatTableDataSource} from "@angular/material";
import { AddressPipe } from "../../pipes/address.pipe";

@Component({
  selector: 'app-loop-startup',
  templateUrl: './loop-startup.component.html',
  styleUrls: ['./loop-startup.component.css']
})
export class LoopStartupComponent implements OnInit {

  @Input()
  startUps: Startup[];

  /**
   * TODO not changed this name
   */
  displayedColumns: string[] = ['name', 'legalRepresentativeName',
    'cofounderNumber', 'description', 'address',
    'nameConsultant', 'actions'];

  dataSource = new MatTableDataSource<Startup>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Startup>(this.startUps);
    this.dataSource.paginator = this.paginator;
  }

  translateRow(row: string){
    switch (row) {
      case 'name': return 'Name';
      case 'legalRepresentativeName': return 'Representative name';
      case 'cofounderNumber': return 'Cofundateur number';
      case 'description': return 'Description';
      case 'address': return 'Address ?';
      case 'nameConsultant': return 'Consultant';
      case 'actions': return '';
    }
  }
}
