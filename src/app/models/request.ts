import { Category } from "./category.enum";
import { Entrepreneur } from "./entrepreneur";
import { Service } from "./service";
import { User } from "./user";

export class Request {
  public readonly id: number;
  public serviceId: number;
  public userId: number;
  public entrepreneurId: number;
  public service: Service;
  public entrepreneur: Entrepreneur;
  public user: User;
  public status: boolean;

  public constructor(
    id: number,
    idService: number,
    idUser: number,
    idEntrepreneur: number,
    service: Service,
    entrepreneur: Entrepreneur,
    user: User
  ) {
    this.id = id;
    this.serviceId = idService;
    this.userId = idUser;
    this.entrepreneurId = idEntrepreneur;
    this.service = service;
    this.entrepreneur = entrepreneur;
    this.user = user;
    this.status = true
  }
}
