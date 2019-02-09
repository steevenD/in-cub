import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../auth/services/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userConnected: Boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    if (localStorage.getItem('userConnected')) {
      this.userConnected = true;
    }
    this.followIfUserIsConnected();
  }

  /**
   * to follow if user is connected to change menu
   */
  followIfUserIsConnected() {
    this.userService.connected$.subscribe(val => {
      this.userConnected = val;
    });
  }

  logout() {
    this.userConnected = false;
    localStorage.clear();
    this.userService.setConnected(false);
  }

}
