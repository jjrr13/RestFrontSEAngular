import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sing-in.component.html'
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
  }

  OnSubmit(userName: any,password: any){
    console.log("en Onsubmit");
     this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
        localStorage.setItem('userToken',data.access_token);
        this.router.navigate(['/home']);
      },
      (err : HttpErrorResponse)=>{
        console.log('en error on Submit')
        this.isLoginError = true;
      }
    );
  }

}