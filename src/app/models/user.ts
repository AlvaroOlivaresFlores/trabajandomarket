import { Service } from "./service";

export class User {
    protected readonly _id: number;
    protected _name: string;
    protected _lastname: string;
    protected _birthDay: Date;
    protected _eMail: string;
    protected _gender: string;
    protected _region: string;
    protected _contratedServices: Array<Service>;

    public constructor(id: number, name: string, lastname: string, birthDay: Date, eMail: string, gender: string, region: string, contratedServices: Array<Service>) {
        this._id = id;
        this._name = name;
        this._lastname = lastname;
        this._birthDay = birthDay;
        this._eMail = eMail;
        this._gender = gender;
        this._region = region;
        this._contratedServices = contratedServices;
    }

    get id() {return this._id}
    get name() {return this._name}
    get lastname() {return this._lastname}
    get birthDay() {return this._birthDay}
    get eMail() {return this._eMail}
    get gender() {return this._gender}
    get region() {return this._region}

}
