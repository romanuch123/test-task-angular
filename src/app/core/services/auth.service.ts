import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string) {
    const users: IUser[] = JSON.parse(localStorage.getItem('users'));
    const user: IUser | undefined = users.find(el => el.email === email && el.password === password);
    if (user) { localStorage.setItem('user', JSON.stringify(user)); }
  }
  registration(user: IUser): Observable<boolean> {
    const users: IUser[] = JSON.parse(localStorage.getItem('users')) || [];
    const isUserExist: IUser | undefined = users.find(el => el.email === user.email);
    if (!isUserExist) {
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('user', JSON.stringify(user));
    }
    return of(Boolean(isUserExist));
  }

  logout(): void {
    localStorage.removeItem('user');
  }
}
