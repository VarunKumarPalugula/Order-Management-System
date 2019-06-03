import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  { path: 'order', component: OrderListComponent  },
  { path: '',  component: UserLoginComponent }
  // { path: '',  redirectTo: 'home', pathMatch: 'full', component: UserLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
