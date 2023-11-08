//
import { dajb } from "daj";

export default class Catalog extends dajb {
  img?: string;
  constructor(categorys: Gategory[], name: string, img?: string) {
    super();
    this.categorys = categorys;
    this.name = name;
    this.img = img;
  }
  static getInstance(): Catalog {
    return new Catalog(null, "");
  }
}
