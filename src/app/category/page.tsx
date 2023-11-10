import Category from "./category";

export default async function Categorys(props) {
  const categorys = props.searchParams.plateType;

  return (
    <>
      <br />
      <br />
      <Category plateType={categorys} />
    </>
  );
}
