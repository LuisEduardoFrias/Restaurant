import { CatalogDA } from "i/data_access.ts";
import Catalog from "m/catalog";
import Category from "m/category";
import Plate from "m/plate";

export default class CatalogController {
  constructor() {
    this.CDA = new CatalogDA();
  }

  async get(): Catalog[] {
    return await this.CDA.get();
  }

  async getFull(): Catalog[] {
    return await this.CDA.getFull();
  }

  async getCategory(): Category[] {
    return await this.CDA.getCategory();
  }

  async getMostRequestedDishes(): Plate[] {
    return await this.CDA.getMostRequestedDishes();
  }
}
