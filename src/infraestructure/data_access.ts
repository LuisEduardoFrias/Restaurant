import { daj } from "daj";
import Plate from "m/plate.ts";

export default class DataAccess {
 getPlates() {
  const newPlate = new Plate("img", "guineo", "description", 6);
  const plate = daj.getAsync(newPlate);
  return plate;
 }

 postPlates(img: string) {
  const newPlate = new Plate(img, "guineo", "description", 6);

  const result = daj.postAsync(newPlate);

  return result;
 }
}
