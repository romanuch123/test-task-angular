import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '../../interfaces/menuItem';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss']
})
export class DashboardMenuComponent implements OnInit {
  @Output() onHideMenu = new EventEmitter();

  isMenuOpen: boolean = false;

  menuList: IMenuItem[] = [
    {
      id: '1',
      name: 'Home',
      icon: 'fas fa-users-class',
      path: '',
    },
    {
      id: '2',
      name: 'Tasks',
      icon: '',
      path: 'tasks',
    },
    {
      id: '3',
      name: 'Completed tasks',
      icon: '',
      path: 'completed-tasks',
    },
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  hideMenu(): void {
    if (this.isMenuOpen) {
      this.onHideMenu.emit();
      this.isMenuOpen = false;
    } else {
      this.isMenuOpen = true;
    }
  }
}
