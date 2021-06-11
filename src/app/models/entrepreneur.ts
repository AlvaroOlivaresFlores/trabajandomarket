import { Region } from './region.enum';
import { Request } from './request';
import { Service } from './service';
import { User } from './user';

export class Entrepreneur extends User {
  public services: Array<Service>;
  private profilePicture: string;
  private description: string;

  public constructor(
    
    firstname: string,
    lastname: string,
    birthday: Date,
    email: string,
    gender: string,
    region: Region,
    requests: Array<Request>,
    services: Array<Service>,
    profilePicture: string,
    description: string,
    password:string
  ) {
    super(
      firstname,
      lastname,
      birthday,
      email,
      gender,
      region,
      requests,
      password
    );
    this.services = services;
    this.profilePicture = profilePicture;
    this.description = description;
  }

}
