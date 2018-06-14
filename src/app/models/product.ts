export class Product {

  public static fromJson({ id, title, price, image }) {
    return new Product(+id, title, price, image);
  }

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public image: string
  ) { }
}
