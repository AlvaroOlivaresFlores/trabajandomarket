import { Category } from "./category.enum";
import { Entrepreneur } from "./entrepreneur";
import { Service } from "./service";
import { User } from "./user";

export class Request {
  public readonly id: number = 0;
  public serviceId: number;
  public userId: number;
  public entrepreneurId: number;
  public status: boolean;

  public service: Service;
  public entrepreneur: Entrepreneur;
  public user: User;

  public constructor(
    idUser: number,
    idEntrepreneur: number,
    idService: number
  ) {
    this.serviceId = idService;
    this.userId = idUser;
    this.entrepreneurId = idEntrepreneur;
    this.status = true
    this.service = this.getService;
    this.entrepreneur = this.getEntrepreneur;
    this.user = this.getUser;
  }
  get getService() { return this.service }
  get getEntrepreneur() { return this.entrepreneur }
  get getUser() { return this.user }
}
