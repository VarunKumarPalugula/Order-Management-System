import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  { path: 'order', component: OrderListComponent  },
  { path: 'login',  component: UserLoginComponent },
  { path: '',  redirectTo: 'login', pathMatch: 'full' },
  { path:'**',  redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
