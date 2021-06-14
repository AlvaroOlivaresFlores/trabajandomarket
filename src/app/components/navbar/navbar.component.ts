import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Region } from 'src/app/models/region.enum';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isentrepreneur: boolean = false;
  user: User = new User('', '', new Date(), '', '', Region.NONE, [], '', false);
  constructor(private router: Router, private authservice: AuthService) {}

  ngOnInit(): void {
    this.isEntrepreneur();
  }
  async isEntrepreneur() {
    this.user = await this.authservice.getCurrentUser();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
