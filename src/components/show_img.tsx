"use client";

import React, { useState, useEffect } from "react";

export default function ShowImage(img: string): React.FC {
 const [imagenData, setImagenData] = useState<string>(img);

 return (
  <div>{imagenData && <img src={imagenData} alt="Imagen seleccionada" />}</div>
 );
}
