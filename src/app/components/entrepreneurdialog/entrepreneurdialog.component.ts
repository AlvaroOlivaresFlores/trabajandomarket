import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Region } from 'src/app/models/region.enum';
import { UsersService } from 'src/app/services/users.service';
import { EntrepreneurService } from 'src/app/services/entrepreneur.service';
import { Entrepreneur } from 'src/app/models/entrepreneur';

export interface Tipo {
  name: string;
}

@Component({
  selector: 'app-entrepreneurdialog',
  templateUrl: './entrepreneurdialog.component.html',
  styleUrls: ['./entrepreneurdialog.component.scss'],
})
export class EntrepreneurdialogComponent implements OnInit {
  description: string;

  profilePicture: string;
  toEntrepreneur: User = new User(
    '',
    '',
    new Date(),
    '',
    '',
    Region.NONE,
    [],
    '',
    true
  );
  newToentrepreneur: User = new User(
    '',
    '',
    new Date(),
    '',
    '',
    Region.NONE,
    [],
    '',
    true
  );
  newEntrepreneur: Entrepreneur = new Entrepreneur(
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
  constructor(
    private user: AuthService,
    private usEdit: UsersService,
    public entrepreneur: EntrepreneurService
  ) {
    this.description = '';
    this.profilePicture = 'https://via.placeholder.com/400x200';
  }
  async convertToEntrepreneur() {
    this.toEntrepreneur = this.user.getCurrentUser();
    this.newToentrepreneur.id = this.toEntrepreneur.id;
    this.newToentrepreneur.firstname = this.toEntrepreneur.firstname;
    this.newToentrepreneur.lastname = this.toEntrepreneur.lastname;
    this.newToentrepreneur.birthdate = this.toEntrepreneur.birthdate;
    this.newToentrepreneur.email = this.toEntrepreneur.email;
    this.newToentrepreneur.gender = this.toEntrepreneur.gender;
    this.newToentrepreneur.region = this.toEntrepreneur.region;
    this.newToentrepreneur.password = this.toEntrepreneur.password;
    this.newToentrepreneur.isentrepreneur = true;

    await this.usEdit.editUser(this.newToentrepreneur).toPromise();

    this.newEntrepreneur.firstname = this.toEntrepreneur.firstname;
    this.newEntrepreneur.lastname = this.toEntrepreneur.lastname;
    this.newEntrepreneur.birthdate = this.toEntrepreneur.birthdate;
    this.newEntrepreneur.email = this.toEntrepreneur.email;
    this.newEntrepreneur.gender = this.toEntrepreneur.gender;
    this.newEntrepreneur.region = this.toEntrepreneur.region;
    this.newEntrepreneur.requests = this.toEntrepreneur.requests;
    this.newEntrepreneur.services = [];
    this.newEntrepreneur.profilePicture = this.profilePicture;
    this.newEntrepreneur.description = this.description;
    this.newEntrepreneur.password = this.toEntrepreneur.password;
    this.newEntrepreneur.isentrepreneur = true;
    this.newEntrepreneur.userId = this.toEntrepreneur.id;

    await this.entrepreneur.addEntrepreneur(this.newEntrepreneur).toPromise();

    localStorage.removeItem('token');

    this.usEdit
      .login(this.newToentrepreneur.email, this.newToentrepreneur.password)
      .subscribe((response) => {
        if (response) {
          let token = response['token'];
          localStorage.setItem('token', token);
        } else {
        }
      });
    location.reload();
  }

  ngOnInit(): void {}
}
