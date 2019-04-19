import {Component, Input, OnInit} from '@angular/core';
import {Consultant} from "../../../consultant/consultant.model";

@Component({
  selector: 'app-consultant-card',
  templateUrl: './consultant-card.component.html',
  styleUrls: ['./consultant-card.component.css']
})
export class ConsultantCardComponent implements OnInit {

  src = '';

  @Input()
  consultant: Consultant;

  constructor() { }

  ngOnInit() {
    this.src = 'https://picsum.photos/200/300/?image=' + this.consultant.firstname.length;
  }

}
