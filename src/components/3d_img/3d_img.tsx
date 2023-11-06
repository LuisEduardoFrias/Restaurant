"use client";

import { useEffect, useState } from "react";
import Move from "./move.js";
import LdDualRing from "cp/id_dual_ring/id_dual_ring";
import "./3d_img.css";

export interface IData {
  img: string;
  desc: string;
}

interface ID3Img {
  error: boolean;
  data: ID3Img[];
}

export default function D3Img({ error, data }: ID3Img) {
  const [state, setState] = useState(data);

  useEffect(() => {
    if (state) Move("img-container");
  }, []);

  return (
    <div className='body-3Dimg'>
      <div className='img-container'>
        {!error ? (
          <>
            {state ? (
              state?.slice(0, 4)?.map((e, i) => (
                <div key={i} className='box'>
                  <img
                    src={e.img}
                    className='img'
                    alt='Imagen seleccionada'
                    className='img'
                  />
                  <div className='plate-desc'>{e.desc}</div>
                </div>
              ))
            ) : (
              <LdDualRing error={false} />
            )}
          </>
        ) : (
          <label className='error-3Dimg'>no disponible</label>
        )}
      </div>
    </div>
  );
}
