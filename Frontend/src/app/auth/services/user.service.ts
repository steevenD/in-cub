import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { User } from '../user.model';
import {httpOptions} from '../../shared/env';
import { ErrorStateMatcher } from '@angular/material';
import { MatchPassword } from '../validators/match-password.validator';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  /**
   * to generate form
   */
  generateRegisterForm(): FormGroup {
    return this.fb.group({
      'firstname': ['', [Validators.required, Validators.maxLength(25)]],
      'lastname': ['', [Validators.required, Validators.maxLength(25)]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]],
      'confirmPassword': ['', [Validators.required]]
    }, {
      validator: MatchPassword('password', 'confirmPassword')
  });
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const password = group.controls.password.value;
    const confirmPassword = group.controls.confirmPassword.value;

    return password === confirmPassword ? null : { notSame: true }
  }

  /**
   * to generate form
   */
  generateLoginForm(): FormGroup {
    return this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]]
    });
  }

  getUsers(): Observable<User[]> {
    // return this.http.get<User[]>(urlAPI + 'users');
    return this.http.get<User[]>('api/users');
  }

  add(user: User) {
    return this.http.post<User>('api/users', user, httpOptions);
  }

  searchUser(email: string, password: string): Observable<User[]> {
    //TODO
    return this.http.get<User[]>('api/users');
  }
}