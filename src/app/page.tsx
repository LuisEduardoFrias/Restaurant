import PlatesController from "ct/plates_controller.ts";
import AddGetImage from "cp/add_get_image";
import ShowImage from "cp/show_img";

export default function Home() {
 const plates_controller = new PlatesController();

 const plate = plates_controller.get();

 return (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
   <AddGetImage />

   {plate.data.map((e, i) => (
    <div key={i} className="p-5 flex-col">
     <label>{e.key}</label>
     <ShowImage img={e.img} />
     <label>{e.name}</label>
     <br />
     <label>{e.description}</label>
     <br />
     <label>{e.score}</label>
     <br />
    </div>
   ))}
  </main>
 );
}
