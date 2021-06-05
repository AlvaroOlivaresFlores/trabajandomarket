import { Service } from "./service";

export class User {
    protected readonly id: number;
    protected name: string;
    protected lastname: string;
    protected birthDay: Date;
    protected eMail: string;
    protected gender: string;
    protected region: string;
    protected contratedServices: Array<Service>;

    public constructor(id: number, name: string, lastname: string, birthDay: Date, eMail: string, gender: string, region: string, contratedServices: Array<Service>) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.birthDay = birthDay;
        this.eMail = eMail;
        this.gender = gender;
        this.region = region;
        this.contratedServices = contratedServices;
    }
}
