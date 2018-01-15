import { Injectable } from '@angular/core';
//import {Router} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router} from '@angular/router';


@Injectable()
export class AuthService {
	private user: Observable<firebase.User>;
  private authState: any;
  public userName: string;
  public displayEmail: string;
  public isLoggedIn: boolean;
  constructor(private firebaseAuth: AngularFireAuth,private db: AngularFireDatabase, private router: Router) {
    this.user = firebaseAuth.authState;
      this.isLoggedIn = false;
  }
authUser() {
    return this.user;
  }
  get currentUserId(): string{
    return this.authState !== null ? this.authState.uid: '';
  }
 getUsername(){
   return this.displayEmail;
 }
 signup(email: string, displayName: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('Success!');
        this.authState = user;
        this.setUserData(user.email, displayName);
        this.router.navigate(['/','login']);
        console.log("signup........"+ user.email+ " "+ displayName );
         return true;

      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
       // this.router.navigate(['/','signup']);
         return false;
      });    
  }

// set userdata
setUserData(email: string, displayName: string): void {
    const path = `users/${this.currentUserId}`;
    console.log("signup........"+ email+ " "+ displayName );
    const data = {
      email: email,
      displayName: displayName
    };

    this.db.object(path).update(data)
      .catch(error => console.log(error));
  }
 
  login(email: string, password: string) {
    this.isLoggedIn = true;
    this.displayEmail = email;
    console.log('current user email'+ this.displayEmail);
        
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        console.log("userid....." + this.firebaseAuth.auth.currentUser.uid);
        this.router.navigate(['/','home']); 
        // console.log("userid....." + this.firebaseAuth.auth.currentUser.displayName);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
         this.router.navigate(['/','login']);
      });
  }

  logout() {
    this.firebaseAuth.auth.signOut();
    this.isLoggedIn = false;
  }
  // currentUser logged in email
  getCurrentUserEmail(){
     return this.displayEmail; 

  }
 
// RESET password
resetPassword(email : string){
  return this. firebaseAuth.auth.sendPasswordResetEmail
(email).then(() => console.log('sent password reset email')).catch((error) => console.log(error))
}
}
