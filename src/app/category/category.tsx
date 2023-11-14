"use client";
import useFetch from "h/useFetch";
import BackButton from "cp//back_button/back_button";
import Icon from "cp/icon/icon";
import Notification from "./notification";
import Category from "m/category";
import Link from "next/link";
import "./category.css";
import LdDualRing from "cp/id_dual_ring/id_dual_ring";
import { usePushNotify, TypeNotify } from "cp/push_notify/push_notify";
import NotificationCard, { ModalType } from "cp/notification/notificationCard";
import { useState } from "react";

export default function Categpey({ categorys }: Category[]) {
  const setPushNotify = usePushNotify();
  const [isloader, handleFetch, _error] = useFetch("bill");
  const [verify, setVerify] = useState({ show: false, data: null });

  const handleClick = (pla: Plate) => {
    setVerify({ show: true, data: pla });
  };

  const handleClickNotify = (event: any) => {
    handleFetch({ plate: verify.data, client: "mesa 001" })
      .then(_data => {
        setPushNotify({ text: "Plate added", type: TypeNotify.post });
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <>
      {/*    <BackButton classCss='back' /> */}
      {!!categorys &&
        categorys.map((e, i) => {
          return (
            <div key={i} className='category-container'>
              <label className='category-title'>{e.name}</label>

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

              <div
                style={{ display: "flex", flexDirection: "column", gap: "3px" }}
                className='category-plates'
              >
                {!!e.plates &&
                  e.plates.map((pla, i) => (
                    <button
                      key={i}
                      className='category-btn none-focus'
                      onClick={() => handleClick(pla)}
                    >
                      {/* <Notification show={!!error} text={error} /> */}
                      <img
                        src={pla.img}
                        alt='Imagen seleccionada'
                        width='100'
                        heigth='100'
                        className='category-plate-img'
                      />
                      <label className='category-plate-name category-plate-text'>
                        {pla.name}
                      </label>
                      <label className='category-plate-price category-plate-text'>
                        RD$ {pla.price}
                      </label>
                    </button>
                  ))}
              </div>
              <br />
            </div>
          );
        })}

      {/*  <button className='edit-btn none-focus'>
        <Icon>edit</Icon>
      </button>
        */}
    </>
  );
}
