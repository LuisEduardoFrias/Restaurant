//
import { dajb } from "daj";

export default class Product extends dajb {
  constructor(img: string, name: string, price: double) {
    super();
    this.img = img;
    this.name = name;
    this.price = price;
  }
}