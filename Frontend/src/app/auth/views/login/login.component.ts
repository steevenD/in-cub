import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fGroup: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.generateForm();


  }

  generateForm() {
    this.fGroup = this.userService.generateLoginForm();
  }

  login() {
    this.userService.searchUser(this.fGroup.value.email, this.fGroup.value.password).subscribe(users => {
      localStorage.setItem('userConnected', users[0].id.toString());
      this.userService.setConnected(true);
      this.snackBar.open('Hi ' + users[0].firstname + ' !', 'Close', {
        duration: 3000
      });
      this.router.navigate(['/']);
    });
  }
}
