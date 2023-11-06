import { SystemDA } from "i/data_access.ts";
import System from "m/system";

export default class SystemController {
  constructor() {
    this.SDA = new SystemDA();
  }
  async get(): System[] {
    return await this.SDA.get();
  }
}
