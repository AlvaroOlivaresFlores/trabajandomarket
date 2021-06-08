export class Request {
    public readonly id: number;
    public idService: number;
    public idUser: number;
    public idEntrepreneur: number;
  
    public constructor(id: number, idService: number, idUser: number, idEntrepreneur: number){
      this.id=id;
      this.idService=idService;
      this.idUser=idUser;
      this.idEntrepreneur=idEntrepreneur;
  
    }
  }