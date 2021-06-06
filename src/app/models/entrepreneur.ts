import { Region } from './region.enum';
import { Service } from './service';
import { User } from './user';

export class Entrepreneur extends User {
  private _services: Array<Number>;
  private profilePicture: string;
  private description: string;

  public constructor(
    
    name: string,
    lastname: string,
    birthDay: Date,
    eMail: string,
    gender: string,
    region: Region,
    contratedServices: Array<Service>,
    services: Array<Number>,
    profilePicture: string,
    description: string
  ) {
    super(
      
      name,
      lastname,
      birthDay,
      eMail,
      gender,
      region,
      contratedServices
    );
    this._services = services;
    this.profilePicture = profilePicture;
    this.description = description;
  }
  get services() {
    return this._services;
  }
  get _profilePicture() {
    return this.profilePicture;
  }
  get _description() {
    return this.description;
  }
}
