import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component';
import { AppComponent } from './app/app.component';
import { SignupComponent } from './app/signup/signup.component';

export const appRoutes: Routes = [
      {path:'home',component:HomeComponent},
      {path:'login',component:LoginComponent},
      {path: 'signup', component: SignupComponent},
      { path: '', component: LoginComponent}
];