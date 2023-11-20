"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Plate from "m/plate";
import Products from "m/product";
import useFetch from "h/useFetch";
import useDateTime from "h/useDateTime";
import Icon from "cp/icon/icon";
import { usePushNotify, TypeNotify } from "cp/push_notify/push_notify";
import "./products.css";

export default function Products({ data }: (Products | Plate)[]) {
  const setPushNotify = usePushNotify();
  const [show, setShow] = useState(true);
  const [datetime] = useDateTime();
  const router = useRouter();
  const [isloader, handleFetch, _error] = useFetch("bill");
  const [_data, setDatas] = useState(data);

  function handleClick(plate: Plate) {
    handleFetch({ plate, client: "mesa 001" }, "DELETE")
      .then(_data => {
        setPushNotify({
          keys: `post: ${datetime()}`,
          text: "Plate removed",
          type: TypeNotify.delete,
        });

        setDatas(prev => {
          return {
            ...prev,
            products: prev.products.filter(p => p.key !== plate.key),
            total: prev.total - plate.price,
          };
        });

        
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <>
      <div className='bill-body'>
        {!!_data.products &&
          _data.products.map((e, i) => (
            <div key={i} className='bill-data'>
              {e?.img && (
                <img
                  src={e.img}
                  alt='Imagen seleccionada'
                  className='bill-img'
                />
              )}
              <label className='bill-name'>{e.name}</label>
              <div className='bill-conten-btn'>
                <button
                  className='bill-btn-remove none-focus'
                  onClick={() => handleClick(e)}
                >
                  <Icon>remove</Icon>
                </button>
                <label className='bill-price'>RD$ {e.price}</label>
              </div>
            </div>
          ))}
      </div>
      <div className='bill-fooder'>
        <label className='bill-foo1'>Total</label>
        <label className='bill-foo2'>RD$ {_data.total?.toFixed(2)}</label>
      </div>
    </>
  );
}
