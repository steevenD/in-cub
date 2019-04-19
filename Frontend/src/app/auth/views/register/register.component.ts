import { Router } from '@angular/router';
import { User } from 'src/app/auth/user.model';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fGroup: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.generateForm();
  }

  generateForm() {
    this.fGroup = this.userService.generateRegisterForm();
  }

  register() {
    const user = new User(
      null,
      this.fGroup.value.firstname,
      this.fGroup.value.lastname,
      this.fGroup.value.email,
      this.fGroup.value.password
    );
    this.userService.register(user)
        .subscribe(() => {
          this.snackBar.open('Your account has been created, you can now log in.', 'Close', {
            duration: 5000
          });
          this.router.navigate(['login']);
        },
          (err) => this.snackBar.open(err.error, 'Close', {
            duration: 5000
          })
        );
  }
}
