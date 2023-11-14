import Category from "./category";
import CatalogController from "ct/catalog_controller.ts";

export default async function Categorys(props) {
  const plateType = props.searchParams.plateType;

  const { categorys, error }: { categorys: Category[]; error: string } =
    await new CatalogController().getCategoryByName(plateType);

  return (
    <>
      <br />
      <br />
      <Category categorys={categorys} />
    </>
  );
}
