import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss']
})
export class DashboardMenuComponent implements OnInit {
  @Output() hideMenu = new EventEmitter();

  menuList: any[] = [
    {
      name: 'Home',
      icon: 'fas fa-users-class',
      path: '',
    },
    {
      name: 'Life Cycle Hooks',
      icon: 'fas fa-users-class',
      path: 'life-cycle-hooks',
    },
  ];

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }
}
