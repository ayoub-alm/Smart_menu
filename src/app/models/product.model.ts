class float {
}


export class ProductModel {
  constructor(
              private id:number,
              public name:string,
              public img:string,
              public price:float,
              public description:string,
              public sku:string,
              ) {
  }
  get getId(): number{
    return this.id;
  }
}
