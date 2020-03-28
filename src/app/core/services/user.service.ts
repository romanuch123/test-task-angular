import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): Observable<IUser> {
    return of(JSON.parse(localStorage.getItem('user')));
  }
  getAllUsers(): Observable<IUser[]> {
    return of(JSON.parse(localStorage.getItem('users')));
  }
  updateUser(user: IUser): void {
    localStorage.setItem('user', JSON.stringify(user));
  }
  updateAllUsers(user: IUser): void {
    let users: IUser[] = JSON.parse(localStorage.getItem('users'));
    users = users.map((el) => {
      if (el.id === user.id) {
        return { ...el, ...user };
      }
      return el;
    });
    localStorage.setItem('users', JSON.stringify(users));
  }
}
