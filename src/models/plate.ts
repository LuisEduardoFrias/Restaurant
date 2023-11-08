//
import { dajb } from "daj";

export default class Plate extends dajb {
  score: number;
  constructor(img: string, name: string, price: number) {
    super();
    this.img = img;
    this.name = name;
    this.price = price;
    this.score = 0;
  }

  public increaseScore(): void {
    this.score += 1;
  }
}
