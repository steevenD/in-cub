import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Startup} from '../../startup.model';
import {MatPaginator, MatTableDataSource} from '@angular/material';

export class LoopStartupComponentVModel {
  startUps: Startup[];
}

@Component({
  selector: 'app-loop-startup',
  templateUrl: './loop-startup.component.html',
  styleUrls: ['./loop-startup.component.css']
})

export class LoopStartupComponent implements OnInit, OnChanges {

  @Input()
  startUps: Startup[];

  viewModel = new LoopStartupComponentVModel();

  displayForm = false;
   /**
   * TODO not changed this name
   */
  displayedColumns: string[] = ['name', 'legalRepresentativeName',
    'cofounderNumber', 'description', 'address',
    'nameConsultant', 'actions'];

  dataSource = new MatTableDataSource<Startup>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Startup>(this.viewModel.startUps);
    this.dataSource.paginator = this.paginator;
    this.viewModel.startUps = this.startUps;
  }

  translateRow(row: string) {
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

  ngOnChanges(changes: SimpleChanges): void {
    this.viewModel.startUps = changes.startUps.currentValue;
    this.dataSource = new MatTableDataSource<Startup>(this.viewModel.startUps);
    this.dataSource.paginator = this.paginator;
  }
}
