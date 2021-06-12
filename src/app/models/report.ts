import { M } from "@angular/cdk/keycodes";

export class Report {
    private readonly id: number=0;
    private  date: Date;
    private  users: number;
    private  entres: number;
    private  porc: number;

    public constructor(date:Date,users:number,entres:number,porc:number) {
        this.date=date;
        this.users=users;
        this.entres=entres;
        this.porc=porc;
    }

    get _id() {return this.id}
    get _date(){return this.date}
    get _users(){return this.users}
    get _entres(){return this.entres}
    get _porc(){return this.porc}

}
