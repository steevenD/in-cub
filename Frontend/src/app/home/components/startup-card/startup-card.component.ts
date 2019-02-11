import {Component, Input, OnInit} from '@angular/core';
import {Startup} from "../../../startup/startup.model";

@Component({
  selector: 'app-startup-card',
  templateUrl: './startup-card.component.html',
  styleUrls: ['./startup-card.component.css']
})
export class StartupCardComponent implements OnInit {

  src = '';

  @Input()
  startup: Startup;

  constructor() { }

  ngOnInit() {
    this.src = 'https://picsum.photos/200/300/?image=' + this.startup.name.length;
  }

}
