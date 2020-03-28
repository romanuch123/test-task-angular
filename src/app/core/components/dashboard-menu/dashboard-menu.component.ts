import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from '../../interfaces/menuItem';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss']
})
export class DashboardMenuComponent implements OnInit {
  @Output() hideMenu = new EventEmitter();

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
    {
      id: '4',
      name: 'Life Cycle Hooks',
      icon: 'fas fa-users-class',
      path: 'life-cycle-hooks',
    },
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
}
