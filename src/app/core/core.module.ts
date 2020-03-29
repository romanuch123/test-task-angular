import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { NestedRouteLoaderComponent } from './components/nested-route-loader/nested-route-loader.component';
import { DashboardMenuComponent } from './components/dashboard-menu/dashboard-menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
  ],
  declarations: [
    NestedRouteLoaderComponent,
    DashboardMenuComponent,
    NotFoundComponent,
  ],
  exports: [
  ],
})
export class CoreModule { }
