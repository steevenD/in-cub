import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numberCardsSection: Array<Number> = [0, 1, 2];
  constructor() { }

  ngOnInit() {
  }

}
