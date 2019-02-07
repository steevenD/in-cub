import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-startup',
  templateUrl: './form-startup.component.html',
  styleUrls: ['./form-startup.component.css']
})
export class FormStartupComponent implements OnInit {

  @Input()
  fGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log(this.fGroup.get('name'));
  }




}
