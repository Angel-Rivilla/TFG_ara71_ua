import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { CheckLoginGuard } from './guards/check-login.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { HomeComponent } from './pages/home/home.component';
import { ListUserComponent } from './pages/list-user/list-user.component';

const routes: Routes = [
  {path:'', redirectTo:'/', pathMatch: 'full'},
  {path: 'notFound', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  {path: 'register', component: RegisterComponent},
  {path: 'login', canActivate: [CheckLoginGuard] , component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'admin', canActivate: [AuthGuard], component: AdminComponent},
  {path: 'admin/user/edit/:id', canActivate: [AuthGuard], component: EditUserComponent},
  {path: 'admin/user/add', canActivate: [AuthGuard], component: EditUserComponent},
  {path: 'admin/users', canActivate: [AuthGuard], component: ListUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
