import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-nested-route-loader',
  templateUrl: './nested-route-loader.component.html',
  styleUrls: ['./nested-route-loader.component.scss']
})
export class NestedRouteLoaderComponent implements OnInit {
  open: boolean = false;
  currentPage = '';
  isLoaded = false;
  isLoading = true;
  user;
  constructor(
    private _router: Router,
    private _userService: UserService,
  ) { }
  ngOnInit() {
    this.user = this._userService.getUser();
    // this.renderer.addClass(document.body, this.currentPage + '-dashboard');

  }
  getUser() {
    this.user = this._userService.getUser();
    return this.user;
  }
  openNav() {
    this.open = !this.open;
  }

  logout() {
    this._userService.deleteUser();
    this._router.navigate(['/']);
  }
}
