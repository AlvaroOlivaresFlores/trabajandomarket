import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import{JwtHelperService} from '@auth0/angular-jwt';
@Component({
  selector: 'app-loginview',
  templateUrl: './loginview.component.html',
  styleUrls: ['./loginview.component.scss'],
})
export class LoginviewComponent implements OnInit {
  hide = true;
  email: string = '';
  password: string = '';
  id: number=0;
  error: boolean = false;
  constructor(private service: UsersService, private router: Router) {}
  ngOnInit(): void {}

  login() {
    this.service.login(this.email, this.password).subscribe((response) => {
      if (response) {
        this.error = false;
        let token = response['token'];
        localStorage.setItem('token', token);
        //var decoded = this.jwt.decodeToken(token);
        //console.log(decoded);
        console.log(token);
        this.router.navigate(['/home']);
      } else {
        this.error = true;
      }
    });
  }
}
