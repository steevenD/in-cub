import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fGroup: FormGroup;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.generateForm();
  }

  generateForm() {
    this.fGroup = this.userService.generateLoginForm();
  }

  login() {
    this.userService.searchUser(this.fGroup.value.email, this.fGroup.value.password).subscribe(users => {
      localStorage.setItem('userConnected', users[0].id.toString());
      this.router.navigate(['/']);
    });
  }
}
