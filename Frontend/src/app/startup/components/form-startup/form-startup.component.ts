import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ConsultantService} from '../../../consultant/services/consultant.service';
import {Consultant} from '../../../consultant/consultant.model';

@Component({
  selector: 'app-form-startup',
  templateUrl: './form-startup.component.html',
  styleUrls: ['./form-startup.component.css']
})
export class FormStartupComponent implements OnInit {

  consultants: Consultant[];

  @Input()
  fGroup: FormGroup;

  constructor(private consultantService: ConsultantService) { }

  ngOnInit() {
    this.getAllConsultants();
  }

  compareFn(v1: Consultant, v2: Consultant): boolean {
    return v1 && v2 ? v1.id === v2.id : v1 === v2;
  }

  getAllConsultants() {
    this.consultantService.getConsultants().subscribe( consultants => {
      this.consultants = consultants;
    });
  }



}
