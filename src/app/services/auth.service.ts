import { Injectable } from '@angular/core';
import{JwtHelperService} from '@auth0/angular-jwt';
import { Region } from '../models/region.enum';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  currentUserLog: User=new User("","",new Date,"","",Region.NONE,[],"",false);
  public isAuthenticated(): boolean{
    const helper =new JwtHelperService();
    const token = localStorage.getItem('token');
    const decode=helper.decodeToken(<string>(token));
    
    if(token){
      this.setCurrentUserLog(decode);
      return !helper.isTokenExpired(token);
    }
    else{
      return false;  
    }
  }

  setCurrentUserLog(currentUserLog: User){
    this.currentUserLog = currentUserLog;
  }
  getCurrentUserLog(){
    return this.currentUserLog;
  }
}
