import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksComponent } from './pages/tasks/tasks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompletedTasksComponent } from './pages/completed-tasks/completed-tasks.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    UserDashboardComponent,
    LoginComponent,
    TasksComponent,
    CompletedTasksComponent,
  ]
})
export class UserModule { }
