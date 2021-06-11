import { Injectable } from '@angular/core';
import{JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  public isAuthenticated(): boolean{
    const helper =new JwtHelperService();
    const token = localStorage.getItem('token');
    if(token){
      return !helper.isTokenExpired(token);
    }
    else{
      return false;  
    }
  }
}
