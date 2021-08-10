import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/Service/user.service';
import { User } from '../User';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  user:User = new User();
  submitted = false;
  userForm: FormGroup;
  
  
  constructor(private userService:UserService, private formBuilder: FormBuilder, router:Router) { }



  ngOnInit() {
    this.userForm = this.formBuilder.group({
      title:[''],
      firstName: [''],
      lastName: [''],
      password: [''],
      email: [''],
      
  });

}

onSubmit(){
  this.submitted = true;
  if(this.userForm.invalid)
  {
    return;
  }

  this.userService.createUser(this.userForm.value).subscribe((data:any)=>
  {
    this.user = data;
  }
  )
}


}

