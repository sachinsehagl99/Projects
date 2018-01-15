import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import{ HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

import { AuthService } from './auth.service';

import { environment } from '../environments/environment.prod';

import{RouterModule, Routes} from '@angular/router';
import { appRoutes } from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpModule,
    RouterModule.forRoot(appRoutes) 
 ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
