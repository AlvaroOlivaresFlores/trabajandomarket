import { Category } from "./category.enum";

export class Service {
    public readonly id: number = 0;
    public name: string = "";
    public description: string = ""; 
    public price: number = 0;
    public rating: number = 0; 
    public category: Category = Category.NONE;
    public images: Array<string> = [];
    public status: boolean = false;
    public deliveryTerm: number = 0;

    public constructor(name: string, description: string, price: number, rating: number, category: Category, images: Array<string>, status: boolean, deliveryTerm: number){
        this.name = name;
        this.description = description;
        this.price = price;
        this.rating = rating;
        this.category = category;
        this.images = images;
        this.status = status;
        this.deliveryTerm = deliveryTerm;
    }

}
