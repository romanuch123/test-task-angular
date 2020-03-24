import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userKey: string = 'user';

  constructor() { }

  isAuthenticated(): boolean {
    return Boolean(localStorage.getItem('user'));
  }

  // setUser(user: User) {
  //   return localStorage.setItem('user', JSON.stringify(user));
  // }

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
