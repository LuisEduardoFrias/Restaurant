import PlatesController from "ct/plates_controller.ts";
import BackButton from "cp//back_button/back_button";

export default function MenuOption(props) {
  const plates = new PlatesController();
   const res = plates.getByCatalogo("props.searchParams.plateType");

  return (
    <>
      <BackButton classCss='back' />
      {res.data.map((e,i)=>{
       return (          <Link
            key={i}
            href={`/menu_option?plateType=${e.name}`}
            className='menu-option none-focus'
          >
            <label>{e.name}</label>
               <label>{e.precio}</label>
          </Link>)
      })}
      <h1>Acompañamientos</h1>
      <h1>Bebidas</h1>
      <h1>Entradas</h1>
      <h1>Platos principales</h1>
      <h1>Postre</h1>
    </>
  );
}
