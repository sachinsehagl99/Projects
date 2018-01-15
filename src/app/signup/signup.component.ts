import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; 
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {FirebaseObjectObservable} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import{Router} from '@angular/router';
import * as firebase from 'firebase/app'; 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
public email: string;
  password: string;
  public displayName: string;
  //userName: string;
  public users:FirebaseListObservable<any>;
  public userId: string;
  public user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, public authService: AuthService, 
    public db: AngularFireDatabase, private router: Router) {
    
  }


  signup() {
    console.log("inside signup in app.component......."+this.email+"  "+this.displayName);
    this.authService.signup(this.email,this.displayName,this.password)
        //this.router.navigate(['/','login']);
        console.log("redirected to login page.......");
       this.email = this.displayName = this.password = '';
  


    }
    /*this.userName = this.displayName; 
     console.log("after signup in app.component......."+this.email+"  "+this.userName);*/
    
 // clear all fields
 resetField(){
   this.email = this.displayName = this.password = "";
 }
}