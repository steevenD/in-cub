import { NgModule } from '@angular/core';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { RegisterComponent } from './auth/views/register/register.component';
import { LoginComponent } from './auth/views/login/login.component';
import { FormConsultantComponent } from './consultant/components/form-consultant/form-consultant.component';
import { FormStartupComponent } from './startup/components/form-startup/form-startup.component';
import { HandleConsultantComponent } from './consultant/view/handle-consultant/handle-consultant.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/view/home/home.component';
import { HandleStartupComponent } from './startup/view/handle-startup/handle-startup.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {title: 'Home'}},
  { path: 'startups', component: HandleStartupComponent, data: {title: 'Startups'}},
  // { path: 'startup/new', component: FormStartupComponent, data: {title: 'Add startup'}},
  { path: 'consultants', component: HandleConsultantComponent, data: {title: 'Consultants'}},
  // { path: 'consultant/new', component: FormConsultantComponent, data: {title: 'Add consultant'}},
  { path: 'login', component: LoginComponent, data: {title: 'Login'}},
  { path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  { path: 'notFound', component: NotFoundComponent, data: {title: 'Error'}},
  { path: '**', redirectTo: 'notFound'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
