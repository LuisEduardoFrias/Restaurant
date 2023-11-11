"use client";

import { useState } from "react";
import Plate from "m/plate";
import Products from "m/product";
import Icon from "cp/icon/icon";
import PushNotify, { TypeNotify } from "cp/push_notify/push_notify";
import "./products.css";

export default function Products({ data }: (Products | Plate)[]) {
  const [show, setShow] = useState(true);

  return (
    <>
      {!!data &&
        data.map((e, i) => (
          <div key={i} className='bill-data'>
            {show && (
              <PushNotify
                text='Plato agregado'
                type={TypeNotify.post}
                setShow={setShow}
              />
            )}
            {e?.img && (
              <img src={e.img} alt='Imagen seleccionada' className='bill-img' />
            )}
            <label className='bill-name'>{e.name}</label>
            <div className='bill-conten-btn' >
              <button className='bill-btn-remove'>
                <Icon>remove</Icon>
              </button>
              <label className='bill-price'>RD$ {e.price}</label>
            </div>
          </div>
        ))}
    </>
  );
}
