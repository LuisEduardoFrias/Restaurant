"use client";

import "./home.css";
import Link from "next/link";
import Plate from "m/plate";
import Catalog from "m/catalog";
import useFetch from "h/useFetch";
import { useState, useEffect } from "react";
import D3Img, { IData } from "cp/3d_img/3d_img";
import LdDualRing from "cp/id_dual_ring/id_dual_ring";
import CatalogController from "ct/catalog_controller";
import PushNotify, { TypeNotify } from "cp/push_notify/push_notify";
import NotificationCard, { ModalType } from "cp/notification/notificationCard";

interface IHomeProps {
  plates: Plate;
  catalogs: Catalog;
}

export default async function HomeClient({ plates, catalogs }: IHomeProps) {
  return (
    <>
      <AddBestPlate plates={plates} />
      <br />
      <h2 className='catalog-title'>Catalogo</h2>
      <br />
      <div className='catalog'>
        {catalogs?.map((e, i) => (
          <Link
            key={i}
            href={`/category?plateType=${e.name}`}
            className='catalog-option none-focus'
          >
            <img src={e.img} alt='Image of catalog.' />
            <label>{e.name}</label>
          </Link>
        ))}
      </div>
      <br />
      <br />
    </>
  );
}

const AddBestPlate = ({ plates }: Plates) => {
  const [isloader, handleFetch, error] = useFetch("bill");
  const [show, setShow] = useState(false);
  const [verify, setVerify] = useState({ show: false, data: null });

  const handleClick = (pla: Plate) => {
    setVerify({ show: true, data: pla });
  };

  const handleClickNotify = (event: any) => {
    handleFetch({ plate: verify.data, client: "mesa 001" })
      .then(_data => {
        setShow(true);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <>
      <PushNotify
        show={show}
        text={"Plate added"}
        type={TypeNotify.post}
        setShow={setShow}
      />
      <NotificationCard
        show={!!error.isError}
        setShow={(state: boolean) => {}}
        type={ModalType.error}
        title={"Error post"}
        dialog={error.text}
        onClick3={(event: any) => {}}
      />
      <NotificationCard
        show={verify.show}
        setShow={(state: boolean) => {
          setVerify(prev => {
            return { ...prev, show: state };
          });
        }}
        type={ModalType.notification}
        title={"Verify"}
        dialog={`You want to add the dish: ${verify.data?.name} to the order.`}
        onClick1={handleClickNotify}
        onClick2={(event: any) => {}}
      />
      <LdDualRing show={isloader} />
      <D3Img data={plates} handleClick={handleClick} />
    </>
  );
};
