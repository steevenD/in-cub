import { MatPaginator } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { Consultant } from './../../consultant.model';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loop-consultant',
  templateUrl: './loop-consultant.component.html',
  styleUrls: ['./loop-consultant.component.css']
})
export class LoopConsultantComponent implements OnInit {

  @Input()
  consultants: Consultant[];

  displayedColumns: string[] = ['firstname', 'lastname', 'description'];

  dataSource = new MatTableDataSource<Consultant>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Consultant>(this.consultants);
    this.dataSource.paginator = this.paginator;
  }

}
