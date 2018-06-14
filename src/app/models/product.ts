export class Product {
  public id: number;
  public title: string;
  public price: number;
  public image: string;

  constructor(data: any = {}) {
    this.id = +data.id || null;
    this.title = data.title;
    this.price = data.price;
    this.image = data.image;
  }
}

