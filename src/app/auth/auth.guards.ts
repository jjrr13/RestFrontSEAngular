import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      var token = localStorage.getItem('userToken');
      if ( token != null && token != undefined && token != 'undefined' && token != '')
      return true;
      this.router.navigate(['/login']);
      return false;
  }

  
}