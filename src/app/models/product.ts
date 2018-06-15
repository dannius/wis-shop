export class Product {
  public id: number;
  public title: string;
  public price: number;
  public image: string;
  public ammount: number;
  public isWish: boolean;

  constructor(row: any = {}) {
    this.id = +row.id || null;
    this.title = row.title || '';
    this.price = row.price || 0;
    this.image = row.image || '';
    this.ammount = row.ammount || 0;
    this.isWish = row.isWish || false;
  }
}
