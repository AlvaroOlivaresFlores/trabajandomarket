import { Region } from "./region.enum";
import { Request } from "./request";
import { Service } from "./service";

export class User {
    public readonly id: number = 0;
    public name: string;
    public lastname: string;
    public birthDay: Date;
    public eMail: string;
    public gender: string;
    public region: Region;
    public requests: Array<Request>;
    public password: string;

    public constructor(name: string, lastname: string, birthDay: Date, eMail: string, gender: string, region: Region, requests: Array<Request>, password: string) {
    
        this.name = name;
        this.lastname = lastname;
        this.birthDay = birthDay;
        this.eMail = eMail;
        this.gender = gender;
        this.region = region;
        this.requests = requests;
        this.password=password;
    }

    

}
