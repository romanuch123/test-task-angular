import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userKey: string = 'user';

  constructor() { }

  // isAuthenticated(): boolean {
  //   return Boolean(localStorage.getItem('user'));
  // }

  // setUser(user: User) {
  //   return localStorage.setItem('user', JSON.stringify(user));
  // }
  createUser(user: IUser) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  // getUser(): CookieUser {
  //   return localStorage.getItem('user');
  // }
  // getAllUsers(): CookieUser {
  //   return localStorage.getItem('user');
  // }

  deleteUser() {
    return localStorage.removeItem('user');
  }
}
