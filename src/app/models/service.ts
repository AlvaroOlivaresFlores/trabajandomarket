import { Category } from "./category.enum";

export class Service {
    private _id: number;
    private _name: string;
    private _description: string; 
    private _price: number;
    private _rating: number; 
    private _category: Category;
    private _images: Array<string>;
    private _status: boolean;
    private _deliveryTerm: number;

    public constructor(id: number, name: string, description: string, price: number, rating: number, category: Category, images: Array<string>, status: boolean, deliveryTerm: number){
        this._id = id;
        this._name = name;
        this._description = description;
        this._price = price;
        this._rating = rating;
        this._category = category;
        this._images = images;
        this._status = status;
        this._deliveryTerm = deliveryTerm;
    }

    get id() { return this._id }
    get name() { return this._name }
    get description() { return this._description }
    get price() { return this._price }
    get rating() { return this._rating }
    get category() { return this._category }
    get images() { return this._images }
    get status() { return this._status }
    get deliveryTerm() { return this._deliveryTerm }
    
}
