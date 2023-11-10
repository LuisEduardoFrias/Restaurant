"use client";

import Plate from "m/plate";
import Products from "m/product";
import "./products.css";

export default function Products({ data }: (Products | Plate)[]) {
  return (
    <>
      {!!data &&
        data.map((e, i) => (
          <div key={i} className='bill-data'>
            {e?.img && (
              <img src={e.img} alt='Imagen seleccionada' className='bill-img' />
            )}
            <label className='bill-name'>{e.name}</label>
            <label className='bill-price'>RD$ {e.price}</label>
          </div>
        ))}
    </>
  );
}
