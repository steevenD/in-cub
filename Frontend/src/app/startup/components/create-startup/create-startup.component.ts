import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {StartupService} from "../../services/startup.service";

@Component({
  selector: 'app-create-startup',
  templateUrl: './create-startup.component.html',
  styleUrls: ['./create-startup.component.css']
})
export class CreateStartupComponent implements OnInit {

  fGroup: FormGroup;

  constructor(private startupService: StartupService) { }

  ngOnInit() {
    this.generateForm();

  }

  generateForm() {
    this.fGroup = this.startupService.generateForm();
  }

  handleClickCreateStartup(){
    console.log(this.fGroup.value);
  }
}
