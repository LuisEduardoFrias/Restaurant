//
import { dajb } from "daj";
import { SystemType } from "./systemType";

export default class System extends dajb {
  constructor(systemType: SystemType, name: string) {
    super();
    this.systemType = systemType;
    this.name = name;
  }
  static getInstance(): SystemType {
    return new System(0, "");
  }
}
