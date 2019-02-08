import { User } from 'src/app/auth/user.model';
import * as faker from 'faker';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserMockService {

  constructor() { }

  getUsersMock(): User[] {
    const users: User[] = [];
    for (let i = 0; i < 30; i++) {
      const user: User = new User(i, faker.name.firstName(), faker.name.lastName(), 'marion.oliver@outlook.fr', '1234');
      users.push(user);
    }
    return users;
  }
}
