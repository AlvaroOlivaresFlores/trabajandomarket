import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminauthService {
  constructor(public http: HttpClient) {}
  public isAdminAuthenticated(): boolean {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');
    if (token) {
      return !helper.isTokenExpired(token);
    } else {
      return false;
    }
  }
  adminlogin(email: string, password: string) {
    return this.http.post<any>('http://localhost:3000/adminlogin', {
      email: email,
      password: password,
    });
  }
}
