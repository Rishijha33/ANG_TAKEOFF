import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  email:String='';
  password:String='';
  userFound:boolean=false;
  constructor(private userService: UserService, private router:Router) 
 { }

  ngOnInit(): void {
  }

  loginUser()
  {
    this.userService.loginUser(this.email,this.password).subscribe((data:any)=>{
      this.userFound=data;
      console.log("I am here");
      console.log(this.userFound);
      if(this.userFound)
      {
        this.router.navigateByUrl("userLogin");
        console.log("redirecting");
        this.router.navigateByUrl("");
      }
    });
  }
}
