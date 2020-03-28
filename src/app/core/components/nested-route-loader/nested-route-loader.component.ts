import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { IUser } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nested-route-loader',
  templateUrl: './nested-route-loader.component.html',
  styleUrls: ['./nested-route-loader.component.scss']
})
export class NestedRouteLoaderComponent implements OnInit, DoCheck {
  open: boolean = false;
  currentPage = '';
  isLoaded = false;
  isLoading = true;
  user: IUser;

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
  ) { }
  ngOnInit() {

    // this.renderer.addClass(document.body, this.currentPage + '-dashboard');
  }
  ngDoCheck(): void {
    // console.log('DoCheck');
    // this.userService.getUser().subscribe((data) => {
    //   this.user = data;
    // });
  }
  isUserAuthorized(): IUser {
    this.userService.getUser().subscribe((data) => {
      this.user = data;
    });
    return this.user;
  }
  openNav() {
    this.open = !this.open;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
