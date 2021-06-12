import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-hiredservicesview',
  templateUrl: './hiredservicesview.component.html',
  styleUrls: ['./hiredservicesview.component.scss'],
})
export class HiredservicesviewComponent implements OnInit {
  currentUser: number = 0;
  username: string = '';
  data: Array<[number, string, number, string, string]>;

  constructor(
    private usersService: UsersService,
    private authservice: AuthService
  ) {
    this.data = [];
  }

  ngOnInit(): void {
    this.loadServices();
  }

  async loadServices() {
    this.currentUser = this.authservice.getCurrentUserLog().id;
    this.username = (
      await this.usersService.getUser(this.currentUser).toPromise()
    ).firstname;
  }
}
