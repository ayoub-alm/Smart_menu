import {SellerModel} from "./seller.model";

class float {
}


export class ProductModel {
  constructor(
              private _id:number,
              public _name:string,
              public _img:string,
              public _price:float,
              public _description:string,
              public _sku:string,
              public _seller: SellerModel,
              public _state:boolean,
              public _ref: string,
              public _categoryId: number
              ) {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get img(): string {
    return this._img;
  }

  set img(value: string) {
    this._img = value;
  }

  get price(): float {
    return this._price;
  }

  set price(value: float) {
    this._price = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get sku(): string {
    return this._sku;
  }

  set sku(value: string) {
    this._sku = value;
  }

  get seller(): SellerModel {
    return this._seller;
  }

  set seller(value: SellerModel) {
    this._seller = value;
  }

  get state(): boolean {
    return this._state;
  }

  set state(value: boolean) {
    this._state = value;
  }

  get ref(): string {
    return this._ref;
  }

  set ref(value: string) {
    this._ref = value;
  }

  get categoryId(){
    return this._categoryId;
  }

  set categoryId(categoryId :number){
    this._categoryId = categoryId;
  }

}
