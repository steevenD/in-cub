import { Consultant } from './../../consultant.model';
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {ConsultantService} from '../../services/consultant.service';

@Component({
  selector: 'app-handle-consultant',
  templateUrl: './handle-consultant.component.html',
  styleUrls: ['./handle-consultant.component.css']
})
export class HandleConsultantComponent implements OnInit {

  consultants: Consultant[];

  constructor(private consultantService: ConsultantService) { }

  ngOnInit() {
    this.getConsultants();
    this.followModalAction();
  }


  followModalAction() {
    const s = this.consultantService.consuultantsChange$.subscribe(value => {
      if (value) {
        this.getConsultants();
      }
    });
  }

  getConsultants() {
    this.consultantService.getConsultants().subscribe(consultants => {
      this.consultants = consultants;
    });
  }

}
