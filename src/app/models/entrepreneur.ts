import { Service } from './service';
import { User } from './user'

export class Entrepreneur extends User {
    private _services: Array<Service>;
    private _profilePicture: string;
    private _description: string;

    public constructor(id: number, name: string, lastname: string, birthDay: Date, eMail: string, gender: string, region: string, contratedServices: Array<Service>, serices: Array<Service>, profilePicture: string, description: string) {
        super(id,name,lastname,birthDay,eMail,gender,region,contratedServices);
        this._services = serices;
        this._profilePicture = profilePicture;
        this._description = description;
    }


    get profilePicture() {return this._profilePicture}
    get description() {return this._description}
    get service() {return this._services}
}
