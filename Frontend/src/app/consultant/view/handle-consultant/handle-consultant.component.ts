import { Component, OnInit } from '@angular/core';
import {ConsultantService} from '../../services/consultant.service';

@Component({
  selector: 'app-handle-consultant',
  templateUrl: './handle-consultant.component.html',
  styleUrls: ['./handle-consultant.component.css']
})
export class HandleConsultantComponent implements OnInit {

  constructor(private consultantService: ConsultantService) { }

  ngOnInit() {
    this.getConsultant();
  }

  getConsultant() {
    console.log(this.consultantService.getConsultants());
  }

}
