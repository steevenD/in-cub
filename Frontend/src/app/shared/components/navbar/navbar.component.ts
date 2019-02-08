import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userConnected: Boolean = false;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('userConnected')) {
      this.userConnected = true;
    }
  }

  logout() {
    this.userConnected = false;
    localStorage.clear();
  }

}
