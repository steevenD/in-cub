import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConsultantService} from "../../../consultant/services/consultant.service";
import {Consultant} from "../../../consultant/consultant.model";

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

  getAllConsultants() {
    this.consultantService.getConsultants().subscribe( consultants => {
      this.consultants = consultants;
    })
  }



}
