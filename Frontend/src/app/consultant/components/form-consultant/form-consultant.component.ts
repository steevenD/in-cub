import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-consultant',
  templateUrl: './form-consultant.component.html',
  styleUrls: ['./form-consultant.component.css']
})
export class FormConsultantComponent implements OnInit {

  @Input()
  fGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }
}
