import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.css']
})
export class ProfileComponent {
  name:string ='';
  emailId:string='';
  status:string='';
  rForm: FormGroup;
  post: any;
 constructor(private fb: FormBuilder){
   this.rForm = fb.group({
     'name':[null,Validators.required],
     'status':[null,Validators.required],
     'validate' : ''
   });
 }
 addPost(post) {
  this.name = post.name;
  this.status = post.status;
}

}


