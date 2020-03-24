import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NestedRouteLoaderComponent } from './core/components/nested-route-loader/nested-route-loader.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { UserDashboardComponent } from './modules/user/pages/user-dashboard/user-dashboard.component';

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
        path: 'life-cycle-hooks',
        component: LifeCycleHooksComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
