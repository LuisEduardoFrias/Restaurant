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
  });
}

export default async function Home() {
  const add = new Add();
  // add.postCatalog();

  const catalogCT = new CatalogController();

  const { catalogs, error: errorCat } = await catalogCT.get();

  const { plates, error: errorRec } = await catalogCT.getMostRequestedDishes();

  // console.log("plates");
  //   console.log(plates);

  return (
    <main>
      <br />
      {/*errorRec && (
        <D3Img data={adacterRecomendations(plates)} error={!!!errorRec} />
      ) */ }

      <br />

      <Notification show={!!errorCat} />

      <h2 className='title-catalogo'>Catalogo</h2>

      <br />
      <div className='catalogo'>
        {/* catalogs ??
          catalogs?.map((e, i) => (
            <Link
              key={i}
              href={`/menu_option?plateType=${e.name}`}
              className='menu-option none-focus'
            >
              <img src={e.img} alt='Imagen seleccionada' />
              <label>{e.name}</label>
            </Link>
          )) */}
      </div>
      <br />
      <div
        style={{
          display: "none",
          heigth: "300px",
          border: "1px solid red",
          width: "100%",
        }}
      >
        <h2>Mas solicitatas</h2>
        images plates
        {/* catalogs ??
          catalogs?.map((e, i) => (
            <div key={i} className='p-5 flex-col'>
              <img
                src={e.img}
                alt='Imagen seleccionada'
                style={{
                  width: "120px",
                  height: "100px",
                  border: "1px solid red",
                }}
              />

              <br />
              <label>{e.name}</label>
              <br />
            </div>
          )) */}
      </div>
      <button className='op-menu'>
        <Icon>edit</Icon>
      </button>
    </main>
  );
}
