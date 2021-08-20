import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//mport { Response } from "@angular/common/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';
import { GlobalService } from '../services/global.service';
//import { access } from 'fs';

@Injectable()
export class UserService {
  
  constructor(private http: HttpClient, private global: GlobalService) { }

  registerUser(user: User) {
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.global.getRutaBase() + '/api/User/Register', body,{headers : reqHeader});
  }

  userAuthentication(userName: any, password: any) {
    console.log("en userAuthentication");
    var data = { "username": userName, "password": password  };
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' } );
    return this.http.post(this.global.getRutaBase() + '/api/login', data, { headers: reqHeader });
  }
}