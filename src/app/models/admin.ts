export class Admin {
    public readonly id: number = 0;
    name:string;
    email:string;
    password:string;
    constructor(n:string,e:string,p:string){
        this.email=e;
        this.name=n;
        this.password=p;
    }
}
