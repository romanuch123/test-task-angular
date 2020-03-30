import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TasksItemComponent } from './components/tasks-item/tasks-item.component';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    TasksListComponent,
    TasksItemComponent,
    ClickOutsideDirective,
  ],
  exports: [
    TasksListComponent,
    TasksItemComponent,
    ClickOutsideDirective,
  ]
})
export class SharedModule { }
