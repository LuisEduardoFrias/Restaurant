import CatalogController from "ct/catalog_controller.ts";
import BackButton from "cp//back_button/back_button";
import Icon from "cp/icon/icon";
import Notification from "./notification";
import Category from "m/category";
import Link from "next/link";
import "./category.css";

export default async function Categpey({ plateType }: string) {
  const { categorys, error }: { categorys: Category[]; error: string } =
    await new CatalogController().getCategoryByName(plateType);

  return (
    <>
      {/*    <BackButton classCss='back' /> */}
      {!!categorys &&
        categorys.map((e, i) => {
          return (
            <div key={i} className='category-container'>
              <label className='category-title'>{e.name}</label>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
                className='category-plates'
              >
                {!!e.plates &&
                  e.plates.map((pla, i) => (
                    <button key={i} className='category-btn none-focus'>
                      {/* <Notification show={!!error} text={error} /> */}
                      <img
                        src={pla.img}
                        alt='Imagen seleccionada'
                        width='100'
                        heigth='100'
                        className='category-plate-img'
                      />
                      <label className='category-plate-name category-plate-text'>
                        {pla.name}
                      </label>
                      <label className='category-plate-price category-plate-text'>
                       RD$ {pla.price}
                      </label>
                    </button>
                  ))}
              </div>
              <br />
            </div>
          );
        })}

      {/*  <button className='edit-btn none-focus'>
        <Icon>edit</Icon>
      </button>
        */}
    </>
  );
}
