import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService, AngularToastifyModule } from 'angular-toastify';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularToastifyModule
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
