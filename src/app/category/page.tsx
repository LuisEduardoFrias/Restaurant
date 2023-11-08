import CatalogController from "ct/catalog_controller.ts";
import BackButton from "cp//back_button/back_button";
import Icon from "cp/icon/icon";
import Category from "m/category";
import Link from "next/link";

export default async function MenuOption(props) {
  const { categorys, error }: { categorys: Category[]; error: string } =
    await new CatalogController().getCategoryByName(
      props.searchParams.plateType,
    );

  return (
    <>
      <BackButton classCss='back' />
      {!!categorys &&
        categorys.map((e, i) => {
          return (
            <div key={i}>
              <label>{e.name}</label>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
              >
                {!!e.plates &&
                  e.plates.map((pla, i) => (
                    <button key={i} className=' none-focus'>
                      <img
                        src={pla.img}
                        alt='Imagen seleccionada'
                        width='100'
                        heigth='100'
                      />
                      <label>{pla.name}</label>
                      <label>{pla.price}</label>
                    </button>
                  ))}
              </div>
            </div>
          );
        })}

      <button className='edit-btn none-focus'>
        <Icon>edit</Icon>
      </button>
    </>
  );
}
