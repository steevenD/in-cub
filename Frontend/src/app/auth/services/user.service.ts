import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { User } from '../user.model';
import {httpOptions, urlAPI} from '../../shared/env';
import { MatchPassword } from '../validators/match-password.validator';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users = new BehaviorSubject<User[]>([]);

  /**
   * to follow if user is connected to change menu
   */
  private connected = new BehaviorSubject(false);
  public connected$ = this.connected.asObservable();

  constructor(private http: HttpClient, private fb: FormBuilder) { }


  /**
   * to set if user is connected
   * @param userIsConnected
   */
  setConnected(userIsConnected: boolean) {
    this.connected.next(userIsConnected);
  }
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
    return this.http.get<User[]>('api/users');
  }

  register(user: User) {
    return this.http.post<User>(`${urlAPI}/auth/signup`, user, httpOptions);
  }

  login(email: string, password: string) {
    //TODO
    // return this.http.get<User[]>('api/users');

    const param = {
      email: email,
      password: password
    };
    return this.http.post(`${urlAPI}/auth/signin`, param, httpOptions);
  }
}
