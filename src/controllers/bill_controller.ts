import { BillDA } from "i/data_access.ts";
import Bill from "m/bill";

export default class BillController {
  constructor() {
    this.BDA = new BillDA();
  }
  async get(): Bill[] {
    return await this.BDA.get();
  }
  async getBySystem(table: string): Bill[] {
    const { bills, error } = await this.BDA.get();

    if (bills === null || bills === undefined || error !== null) return { bills, error };

    return { bills: bills.map(o => o.system.name === table), error: null };
  }
  async getInvoiceWithoutPaying(table: string): Bill {
    const { bills, error } = await this.BDA.get();
    
    if (bills === null || bills === undefined || error !== null) return { bills, error };
    
    return {bill: bills.filter(o => o.wasIfPaid === false && o.system.name === table), error:null}
  }
}
