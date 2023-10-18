import DataAccess from "i/data_access.ts";

export default class PlatesController {
 get() {
  const dataAccess = new DataAccess();
  const plates = dataAccess.getPlates();
  return plates;
 }
 post(img: string) {
  const dataAccess = new DataAccess();
  const plates = dataAccess.postPlates(img);
  return plates;
 }
}
