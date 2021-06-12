import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from 'src/app/services/adminauth.service';

@Component({
  selector: 'app-loginadminview',
  templateUrl: './loginadminview.component.html',
  styleUrls: ['./loginadminview.component.scss'],
})
export class LoginadminviewComponent implements OnInit {
  email: string = '';
  password: string = '';
  error: boolean = false;
  constructor(private service: AdminauthService, private router: Router) {}

  ngOnInit(): void {}
  hide = true;
  loginAdmin() {
    this.service.adminlogin(this.email, this.password).subscribe((response) => {
      if (response) {
        this.error = false;
        let token = response['token'];
        localStorage.setItem('token', token);
        this.router.navigate(['admin/dashboard']);
      } else {
        this.error = true;
      }
    });
  }
}
