import { Category } from './category.enum';

export class Service {
  public id: number = 0;
  public name: string;
  public description: string;
  public price: number;
  public rating: number;
  public category: Category;
  public images: Array<string>;
  public status: boolean;
  public deliveryTerm: number;
  public entrepreneurId: number;

  public constructor(
    name: string,
    description: string,
    price: number,
    rating: number,
    category: Category,
    images: Array<string>,
    status: boolean,
    deliveryTerm: number,
    entrepreneurId: number
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.rating = rating;
    this.category = category;
    this.images = images;
    this.status = status;
    this.deliveryTerm = deliveryTerm;
    this.entrepreneurId = entrepreneurId;
  }
}
