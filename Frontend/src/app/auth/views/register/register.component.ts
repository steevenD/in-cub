import { Router } from '@angular/router';
import { InMemoryDataService } from './../../../shared/services/in-memory-data.service';
import { User } from 'src/app/auth/user.model';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fGroup: FormGroup;
  userId: number = null;
  users: User[] = [];
  constructor(private userService: UserService, private memoryService: InMemoryDataService, private router: Router) { }

  ngOnInit() {
    this.generateForm();
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.userService.users.next(this.users);

    });
    this.userService.users.subscribe(users => this.userId = this.memoryService.genId(users));
  }

  generateForm() {
    this.fGroup = this.userService.generateRegisterForm();
  }

  register() {
    const user = new User(
      this.userId,
      this.fGroup.value.firstname,
      this.fGroup.value.lastname,
      this.fGroup.value.email,
      this.fGroup.value.password
    );
    this.userService.add(user)
        .subscribe(() => {
          this.router.navigate(['/']);
        });
  }
}
