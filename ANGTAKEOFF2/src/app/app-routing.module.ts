import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'userList', component:UserComponent},
  {path:'userLogin', component:UserLoginComponent},
  {path:'userReg', component:UserRegisterComponent},
  {path:'userDash',component:UserDashboardComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
