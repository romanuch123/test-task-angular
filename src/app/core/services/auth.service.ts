import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string) {
    const users: IUser[] = JSON.parse(localStorage.getItem('users'));
    const user: IUser = users.find(el => el.username === username && el.password === password);
    if (user) { localStorage.setItem('user', JSON.stringify(user)); }
  }

}
