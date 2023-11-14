"use client";

import { useState } from "react";
import Plate from "m/plate";
import Products from "m/product";
import Icon from "cp/icon/icon";
import { usePushNotify, TypeNotify } from "cp/push_notify/push_notify";
import "./products.css";

export default function Products({ data }: (Products | Plate)[]) {
  const setPushNotify = usePushNotify();
  const [show, setShow] = useState(true);

  function handleClick(plate: Plate) {
    setPushNotify({ text: "Plate removed", type: TypeNotify.delete });
  }

  return (
    <>
      {!!data &&
        data.map((e, i) => (
          <div key={i} className='bill-data'>
            {e?.img && (
              <img src={e.img} alt='Imagen seleccionada' className='bill-img' />
            )}
            <label className='bill-name'>{e.name}</label>
            <div className='bill-conten-btn'>
              <button
                className='bill-btn-remove'
                onClick={() => handleClick(e)}
              >
                <Icon>remove</Icon>
              </button>
              <label className='bill-price'>RD$ {e.price}</label>
            </div>
          </div>
        ))}
    </>
  );
}
