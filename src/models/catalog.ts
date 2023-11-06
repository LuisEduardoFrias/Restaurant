//
import { dajb } from "daj";

export default class Catalog extends dajb {
  img?: string;
  constructor(category: Gategory[], name: string, img?: string) {
    super();
    this.category = category;
    this.name = name;
    this.img = img;
  }
  static getInstance(): Catalog {
    return new Catalog(null, "");
  }
}
