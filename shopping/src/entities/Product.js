export class Product {
  constructor({
    id,
    name,
    price,
    isInCart
  }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.isInCart = isInCart;
  }
}