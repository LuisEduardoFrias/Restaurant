import { daj } from "daj";
import Catalog from "m/catalog";
import Category from "m/category";
import Plate from "m/plate";
import Product from "m/product";
import Bill from "m/bill";
import System from "m/system";

//
// CATALOG
//

export class CatalogDA {
  async get(): { catalogs: Catalog[]; error: string | null } {
    const { data, error } = await daj.getAsync(Catalog.getInstance());
    if (error !== null || data === null || data === undefined)
      return { catalogs: data, error };
    return {
      catalogs: data.map(e => {
        e.category = {};
        return e;
      }),
      error: null,
    };
  }

  async getFull(): { catalogs: Catalog[]; error: string | null } {
    const { data, error } = await daj.getAsync(Catalog.getInstance());

    return { catalogs: data, error };
  }

  async getCategory(): { categorys: Category[]; error: string | null } {
    const { data, error } = await daj.getAsync(Catalog.getInstance());

    if (error !== null || data === null || data === undefined)
      return { categorys: data, error };

    return { categorys: data.map(e => e.category) as Category[], error: null };
  }

  async getMostRequestedDishes(): { products: Plate[]; error: string | null } {
    const { data, error } = await this.getCategory();

    if (error !== null || data === null || data === undefined)
      return { data, error };

    const plates: (Product | Plate)[] = data.map(e => e.plates) as (
      | Product
      | Plate
    )[];

    return { products: getTopProducts(plates.map(e => "score" in e)), error };
  }

  private getTopProducts(products: Plate[]): Product[] {
    const sortedProducts: Plate[] = products.sort((a, b) => b.score - a.score);

    return sortedProducts.slice(0, 5);
  }

  async post(obj: Catalog) {
    return await daj.postAsync(obj);
  }
  async put(obj: Catalog) {
    return await daj.putAsync(obj);
  }
  async delete(key: string) {
    return await daj.deleteAsync(key);
  }
}

//
// BILL
//

export class BillDA {
  async get(): { bills: Bill[]; error: string | null } {
    const { data, error } = await daj.getAsync(Bill.getInstance());

    return { bills: data, error };
  }
  async post(obj: Bill) {
    return await daj.postAsync(obj);
  }
  async put(obj: Bill) {
    return await daj.putAsync(obj);
  }
}

//
// SYSTEN
//

export class SystemDA {
  async get(): { systems: System[]; error: string | null } {
    const { data, error } = await daj.getAsync(System.getInstance());

    return { systems: data, error };
  }
  async post(obj: System) {
    return await daj.postAsync(obj);
  }
  async put(obj: System) {
    return await daj.putAsync(obj);
  }
}
