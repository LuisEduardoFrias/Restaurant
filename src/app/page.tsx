import CatalogController from "ct/catalog_controller";
import D3Img, { IData } from "cp/3d_img/3d_img";
import Notification from "./notification";
import Icon from "cp/icon/icon";
import Link from "next/link";
import "./home.css";
import Add from "ct/Add";
import Catalog from "m/catalog";
import Category from "m/category";
import Plate from "m/plate";

function adacterRecomendations(re: Plate[]): IData[] {
  return re.map(e => {
    return { desc: e.name, img: e.img };
  }) as Plate[];
}

export default async function Home() {
  const add = new Add();
  //add.postBill();
  //add.postCatalog();

  const catalogCT = new CatalogController();

  const { catalogs, error: errorCat } = await catalogCT.get();

  const { plates, error: errorRec } = await catalogCT.getMostRequestedDishes();

  let adacterPlate = null;
  if (!!plates) adacterPlate = adacterRecomendations(plates);

  return (
    <main>
      <br />
      <br />
      {!!plates && <D3Img data={adacterPlate} error={!!plates} />}

      <br />

      <Notification show={!!errorCat} />

      <h2 className='title-catalogo'>Catalogo</h2>

      <br />
      <div className='catalogo'>
        {catalogs?.map((e, i) => (
          <Link
            key={i}
            href={`/category?plateType=${e.name}`}
            className='menu-option none-focus'
          >
            <img src={e.img} alt='Imagen seleccionada' />
            <label>{e.name}</label>
          </Link>
        ))}
      </div>
      <br />

      <button className='edit-btn none-focus'>
        <Icon>edit</Icon>
      </button>
    </main>
  );
}
