//
import { dajb } from "daj";
import Plate from './plate';
import Product from './product';

export default class Category extends dajb {
  constructor(plates: (Plate | Product)[], name: string) {
    super();
    this.plates = plates;
    this.name = name;
  }
}
