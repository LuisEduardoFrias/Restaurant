import "./home.css";
import Add from "ct/Add";
import HomeClient from "./home";
import Notification from "./notification";
import CatalogController from "ct/catalog_controller";
import RequestSystemType from "cp/configuration/request_system_type";

export default async function Home() {
  const add = new Add();
  //add.postBill();
  //add.postCatalog();

  const catalogCT = new CatalogController();

  const { catalogs, error: errorCat } = await catalogCT.get();

  const { plates } = await catalogCT.getMostRequestedDishes();

  return (
    <>
      <RequestSystemType />
      <Notification show={!!errorCat} />
      <HomeClient plates={plates} catalogs={catalogs} />
    </>
  );
}
