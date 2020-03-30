import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { IUser } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-nested-route-loader',
  templateUrl: './nested-route-loader.component.html',
  styleUrls: ['./nested-route-loader.component.scss']
})
export class NestedRouteLoaderComponent implements OnInit, DoCheck {
  open: boolean = false;
  user: IUser;

  constructor(
    private router: Router,
    private userService: UserService,
    public authService: AuthService,
  ) {  }
  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.userService.getUser().subscribe((data) => {
      this.user = data;
    });
  }
  openNav() {
    this.open = !this.open;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
