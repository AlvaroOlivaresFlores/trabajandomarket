export class Request {
  public readonly id: number;
  public serviceId: number;
  public userId: number;
  public entrepreneurId: number;

  public constructor(
    id: number,
    idService: number,
    idUser: number,
    idEntrepreneur: number
  ) {
    this.id = id;
    this.serviceId = idService;
    this.userId = idUser;
    this.entrepreneurId = idEntrepreneur;
  }
}
