import { Region } from './region.enum';
import { Request } from './request';

export class User {
  public id: number = 0;
  public firstname: string;
  public lastname: string;
  public birthdate: Date;
  public email: string;
  public gender: string;
  public region: Region;
  public requests: Array<Request>;
  public password: string;
  public isentrepreneur: boolean;

  public constructor(
    name: string,
    lastname: string,
    birthDay: Date,
    eMail: string,
    gender: string,
    region: Region,
    requests: Array<Request>,
    password: string,
    isEntre: boolean
  ) {
    this.firstname = name;
    this.lastname = lastname;
    this.birthdate = birthDay;
    this.email = eMail;
    this.gender = gender;
    this.region = region;
    this.requests = requests;
    this.password = password;
    this.isentrepreneur = isEntre;
  }
}
