import { Region } from "./region.enum";
import { Request } from "./request";
import { Service } from "./service";

export class User {
    public readonly id: number = 0;
    public firstname: string;
    public lastname: string;
    public birthdate: Date;
    public email: string;
    public gender: string;
    public region: Region;
    public requests: Array<Request>;
    public password: string;

    public constructor(name: string, lastname: string, birthDay: Date, eMail: string, gender: string, region: Region, requests: Array<Request>, password: string) {
    
        this.firstname = name;
        this.lastname = lastname;
        this.birthdate = birthDay;
        this.email = eMail;
        this.gender = gender;
        this.region = region;
        this.requests = requests;
        this.password=password;
    }

    

}
