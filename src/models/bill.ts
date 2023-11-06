//
import { dajb } from "daj";
import Plate from "./plate";
import Product from "./product";
import System from "./system";

export default class Bill extends dajb {
  total: number;
  constructor(
    products: (Plate | Product)[],
    client: System,
    datetime: Date,
    wasIfPaid: boolean,
  ) {
    super();
    this.products = products;
    this.client = client;
    this.datetime = datetime;
    this.wasIfPaid = wasIfPaid;
    this.calcTotal(products);
  }

  private calcTotal(products: (Plate | Product)[]): void {
    products.forEach(prod => {
      this.total += prod.price;
    });
  }
  static getInstance(): Bill {
    return new Bill([], null, null, false);
  }
}
