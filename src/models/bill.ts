//
import { dajb } from "daj";
import Plate from "./plate";
import Product from "./product";
import System from "./system";

export default class Bill extends dajb {
  constructor(
    products: (Plate | Product)[],
    client: System,
    wasIfPaid: boolean,
  ) {
    super();
    this.products = products;
    this.client = client;

    const date = new Date().toLocaleDateString("es-DO");
    const time = new Date().toLocaleTimeString("es-DO");

    this.datetime = `${date} ${time}`;
    this.wasIfPaid = wasIfPaid;
    this.total = 0.0;
    this.calcTotal(products);
  }

  private calcTotal(products: (Plate | Product)[]): void {
   !!products && products?.forEach(prod => {
      this.total += prod.price;
    });
  }
  static getInstance(): Bill {
    return new Bill(null, null, false);
  }
}
