import { Region } from "./region.enum";
import { Service } from "./service";

export class User {
    public readonly id: number =0;
    public name: string;
    public lastname: string;
    public birthDay: Date;
    public eMail: string;
    public gender: string;
    public region: Region;
    public contratedServices: Array<Service>;

    public constructor(name: string, lastname: string, birthDay: Date, eMail: string, gender: string, region: Region, contratedServices: Array<Service>) {
    
        this.name = name;
        this.lastname = lastname;
        this.birthDay = birthDay;
        this.eMail = eMail;
        this.gender = gender;
        this.region = region;
        this.contratedServices = contratedServices;
    }

    

}