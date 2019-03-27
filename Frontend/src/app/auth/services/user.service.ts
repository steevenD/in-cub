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
declare const FB;
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

  constructor(private http: HttpClient, private fb: FormBuilder) {
    FB.init({
      appId: '316581045720981',
      cookie: false,  // enable cookies to allow the server to access the session
      xfbml: true,  // parse social plugins on this page
      version: 'v2.8' // use graph api version 2.5
    });

    FB.login((response: any) => {
      console.log(response);
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        this.personalInformationFacebook(response.authResponse.userID, response.authResponse.accessToken);
      } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
      } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
      }

    }, {scope: 'user_friends,email'});
  }

  personalInformationFacebook(userId, accessToken) {
    FB.api(
      "/" + userId + '?fields=id,name,first_name,email,gender,picture.width(150).height(150),age_range,friends',
      (result) => {
        console.log("result ===", result);
        if (result && !result.error) {
        }
      });
  }

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
