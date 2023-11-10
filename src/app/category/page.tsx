import Category from "./category";

export default async function MenuOption(props) {
  const categorys = props.searchParams.plateType;

  return <>
  <br />
  <br />
  <Category plateType={categorys} /></>
}
