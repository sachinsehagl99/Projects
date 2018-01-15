import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { AuthService } from '../auth.service'; 
import { AngularFireAuth } from 'angularfire2/auth';
import{Router} from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {FirebaseObjectObservable} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {
  public users:FirebaseObjectObservable<any>;
  email: string;
  password: string;
  public displayEmail: string;
  userName: string;
  resetPassword = false;
  check: boolean;
  constructor(public afAuth: AngularFireAuth, public authService: AuthService, 
    public db: AngularFireDatabase,  private router: Router) {
    
    }
    
     
  login() {
     this.check = this.isValidMailFormat(this.email);
     if(this.check == true){
      this.authService.login(this.email, this.password)
            // this.displayEmail = this.email;
     // userName = this.getUserName(this.email);
      console.log("before redirecting to chat component.......");
      this.authService.displayEmail = this.email;
      console.log("displayEmail: "+ this.authService.displayEmail);
      //this.authService.userName
      this.email = this.password = '';
     // this.router.navigate(['/','home']); 
      console.log("after successfully redirecting to chat component.......");
     
     }else{
          // display msg if credentials are wrong.
     }

      /*getUserName(email:string){
        
     }*/
  }

  logout() {
    console.log("logout called........");
    this.authService.logout();
    this.email = "";
  }
  sendResetEmail() {
    console.log("reset mail send............");
    this.authService.resetPassword(this.email)
      .then(() => this.resetPassword = true)
            .catch(error => {
        console.log (error)
      })
            this.email= "";
      console.log("reset mail send.@@@@@@@@@@@@...........");
  }
  
  isValidMailFormat(email: string) {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
 
    if ((email.length === 0) && (!EMAIL_REGEXP.test(email))) {
      return false;
    }
 
    return true;
  }
}