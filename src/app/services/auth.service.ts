import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Entrepreneur } from '../models/entrepreneur';
import { Region } from '../models/region.enum';
import { User } from '../models/user';
import { EntrepreneurService } from './entrepreneur.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private enrepreneurService: EntrepreneurService) {}
  currentEntrepreneurAux: Array<Entrepreneur> = [];
  currentEntrepreneur: Entrepreneur = new Entrepreneur(
    '',
    '',
    new Date(),
    '',
    '',
    Region.NONE,
    [],
    [],
    '',
    '',
    '',
    true,
    0
  );
  currentUserLog: User = new User(
    '',
    '',
    new Date(),
    '',
    '',
    Region.NONE,
    [],
    '',
    false
  );

  public isAuthenticated(): boolean {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');
    const decode = helper.decodeToken(<string>token);

    if (token) {
      this.setCurrentUser(decode);
      this.setCurrentEntrepreneur();
      return !helper.isTokenExpired(token);
    } else {
      return false;
    }
  }

  setCurrentUser(currentUser: User) {
    this.currentUserLog = currentUser;
  }
  getCurrentUser() {
    return this.currentUserLog;
  }
  async setCurrentEntrepreneur() {
    if (this.getCurrentUser().isentrepreneur) {
      this.currentEntrepreneurAux = await this.enrepreneurService
        .getEntrepreneurByUserId(this.getCurrentUser().id)
        .toPromise();
      this.currentEntrepreneur = this.currentEntrepreneurAux[0];
    }
  }
  getCurrentEntrepreneur() {
    return this.currentEntrepreneur;
  }
}
