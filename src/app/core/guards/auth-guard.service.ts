import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.authService.isUserAuthorized() && state.url !== '/login') {
      return true;
    }
    if (this.authService.isUserAuthorized() && state.url === '/login') {
      this.router.navigate(['']);
      return false;
    }
    if (state.url === '/login') {
      return true;
    }
    this.router.navigate(['login']);
    return true;
  }
}
