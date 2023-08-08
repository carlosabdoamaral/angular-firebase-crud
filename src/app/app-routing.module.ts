import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [
  { path: "list", component: ListComponent },
  { path: "", redirectTo: "/list", pathMatch: "full" },
  { path: "create", component: CreateAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
