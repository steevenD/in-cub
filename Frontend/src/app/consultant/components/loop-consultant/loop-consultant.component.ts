import { MatPaginator } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { Consultant } from './../../consultant.model';
import { Component, OnInit, Input, ViewChild, SimpleChanges, OnChanges } from '@angular/core';

export class LoopConsultantComponentVModel {
  consultants: Consultant[];
}

@Component({
  selector: 'app-loop-consultant',
  templateUrl: './loop-consultant.component.html',
  styleUrls: ['./loop-consultant.component.css']
})
export class LoopConsultantComponent implements OnInit, OnChanges {

  @Input()
  consultants: Consultant[];

  viewModel = new LoopConsultantComponentVModel();

  displayedColumns: string[] = ['firstname', 'lastname', 'description', 'actions'];

  dataSource = new MatTableDataSource<Consultant>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Consultant>(this.consultants);
    this.dataSource.paginator = this.paginator;
  }

  translateRow(row: string) {
    switch (row) {
      case 'firstname': return 'Firstname';
      case 'lastname': return 'Lastname';
      case 'description': return 'Description';
      case 'actions': return '';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.viewModel.consultants = changes.consultants.currentValue;
    this.dataSource = new MatTableDataSource<Consultant>(this.viewModel.consultants);
    this.dataSource.paginator = this.paginator;
  }
}
