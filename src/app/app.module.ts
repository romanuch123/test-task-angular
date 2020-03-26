import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './modules/user/user.module';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { LifeCycleChangesComponent } from './life-cycle-hooks/life-cycle-changes/life-cycle-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleHooksComponent,
    LifeCycleChangesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    RouterModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
