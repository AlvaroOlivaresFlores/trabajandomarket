import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/models/region.enum';
import { User } from 'src/app/models/user';
import {UsersService} from 'src/app/services/users.service';


@Component({
  selector: 'app-signupview',
  templateUrl: './signupview.component.html',
  styleUrls: ['./signupview.component.scss']
})
export class SignupviewComponent implements OnInit {
  hide = true;
  name:string;
  lastName:string;
  eMail:string;
  birthDate: Date;
  gender: string;
  region: Region;
  password:string;
  isentrepreneur:boolean;
  constructor(private usersService : UsersService) {
    this.name= "";
    this.lastName= "";
    this.eMail= "";
    this.birthDate=new Date(1990,0,1);
    this.gender="";
    this.region=Region.REGIONMETROPOLITANA;
    this.password="";
    this.isentrepreneur=false;
   }

  ngOnInit(): void {
  }
  addUser(){
    
    this.usersService.addUser(
      new User(
        this.name,
        this.lastName,
        this.birthDate,
        this.eMail,
        this.gender,
        this.region,
        [],
        this.password,
        this.isentrepreneur
      )
    )
    .toPromise();
  }

}
