import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NestedRouteLoaderComponent } from './core/components/nested-route-loader/nested-route-loader.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { UserDashboardComponent } from './modules/user/pages/user-dashboard/user-dashboard.component';
import { LoginComponent } from './modules/user/pages/login/login.component';
import { TasksComponent } from './modules/user/pages/tasks/tasks.component';
import { CompletedTasksComponent } from './modules/user/pages/completed-tasks/completed-tasks.component';

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
        component: TasksComponent,
      },
      {
        path: 'completed-tasks',
        component: CompletedTasksComponent,
      },
      {
        path: 'life-cycle-hooks',
        component: LifeCycleHooksComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
