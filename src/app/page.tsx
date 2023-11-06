import CatalogController from "ct/catalog_controller";
import D3Img, { IData } from "cp/3d_img/3d_img";
import Notification from "./notification";
import Plate from "m/plate";
import Link from "next/link";
import "./home.css";

function adacterRecomendations(re: Plate[]): IData[] {
  return re.map(e => {
    return { desc: e.name, img: e.img };
  });
}

export default async function Home() {
  const catalogCT = new CatalogController();

  const { data: catalogs, error: errorCat } = await catalogCT.get();

  const { data: recomendations, error: errorRec } =
    await catalogCT.getMostRequestedDishes();

  return (
    <main>
      <br />
      {errorRec && (
        <D3Img
          data={adacterRecomendations(recomendations)}
          error={!!!errorRec}
        />
      )}

      <br />

      <Notification show={!!!errorCat} />

      <h2 className='title-catalogo'>Catalogo</h2>

      <br />
      <div className='catalogo'>
        {!errorCat ??
          catalogs?.map((e, i) => (
            <Link
              key={i}
              href={`/menu_option?plateType=${e.name}`}
              className='menu-option none-focus'
            >
              <img src={e.img} alt='Imagen seleccionada' />
              <label>{e.name}</label>
            </Link>
          ))}
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
        {!errorCat ??
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
          ))}
      </div>
    </main>
  );
}
