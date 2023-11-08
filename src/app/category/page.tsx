import CatalogController from "ct/catalog_controller.ts";
import BackButton from "cp//back_button/back_button";
import Icon from "cp/icon/icon";

export default function MenuOption(props) {
  const catalog = new CatalogController();
  const { categorys, error } = catalog.getCategoryByName(
    props.searchParams.plateType
  );

  return (
    <>
      <BackButton classCss='back' />
      {categorys.map((e, i) => {
        return (
          <Link
            key={i}
            href={`/menu_option?plateType=${e.name}`}
            className='menu-option none-focus'
          >
            <label>{e.name}</label>
          </Link>
        );
      })}

      <button className='edit-btn none-focus'>
        <Icon>edit</Icon>
      </button>
    </>
  );
}
