export class Product {

  public static fromJson({ id, title, price, image }) {
    return new Product(+id, title, price, image);
  }

  constructor(
    public id: number,
    public title: string,
    public price: string,
    public image: string
  ) { }
}
