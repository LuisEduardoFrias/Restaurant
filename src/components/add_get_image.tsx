"use client";

import PlatesController from "ct/plates_controller.ts";
import React from "react";

export default function AddGetImage(): React.FC {
 const plates_controller = new PlatesController();

 const handleImagenSeleccionada = (
  event: React.ChangeEvent<HTMLInputElement>
 ) => {
  const file = event.target.files?.[0];
  if (file) {
   const reader = new FileReader();
   reader.onloadend = () => {
    plates_controller.post(reader.result as string);
    setImagenData(reader.result as string);
   };
   reader.readAsDataURL(file);
  }
 };

 return (
  <div>
   <input type="file" onChange={handleImagenSeleccionada} />
  </div>
 );
}
