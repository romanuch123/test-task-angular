import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NestedRouteLoaderComponent } from './core/components/nested-route-loader/nested-route-loader.component';
import { UserDashboardComponent } from './modules/user/pages/user-dashboard/user-dashboard.component';
import { LoginComponent } from './modules/user/pages/login/login.component';
import { TasksComponent } from './modules/user/pages/tasks/tasks.component';
import { CompletedTasksComponent } from './modules/user/pages/completed-tasks/completed-tasks.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AuthGuardService } from './core/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: NestedRouteLoaderComponent,
    children: [
      {
        path: '',
        component: UserDashboardComponent,
      },
      {
        path: 'tasks',
        canActivate: [AuthGuardService],
        component: TasksComponent,
      },
      {
        path: 'completed-tasks',
        canActivate: [AuthGuardService],
        component: CompletedTasksComponent,
      },
      {
        path: 'login',
        canActivate: [AuthGuardService],
        component: LoginComponent,
      },
    ],
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
