import { Service } from './service';
import { User } from './user'

export class Entrepreneur extends User {
    private services: Array<Service>;
    private profilePicture: string;
    private description: string;

    public constructor(id: number, name: string, lastname: string, birthDay: Date, eMail: string, gender: string, region: string, contratedServices: Array<Service>, serices: Array<Service>, profilePicture: string, description: string) {
        super(id,name,lastname,birthDay,eMail,gender,region,contratedServices);
        this.services = serices;
        this.profilePicture = profilePicture;
        this.description = description;
    }
}
