import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'userList', component:UserComponent},
  {path:'user-reg', component:UserRegisterComponent},
  {path:'userLogin', component:UserLoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
