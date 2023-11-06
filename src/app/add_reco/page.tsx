"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import BackButton from "cp/back_button/back_button";
import Notification from "cp/notification/notification";
import LdDualRing from "cp/id_dual_ring/id_dual_ring";
import Form, { IFormsProp } from "cp/form/form";

interface IAddRecoForms {
  img?: string;
  score?: number;
}

export default function AddReco() {
  const onSubmit = (
    data: object[],
    setLoader: (show: booleand) => void,
    setNotif: (obj: INotificarion) => void,
  ) => {
    fetch("/api/reco", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setNotif({ show: true, text: data.data });
        } else {
          setNotif({ show: true, text: data.error });
        }
      })
      .catch(error => {
        setNotif({ show: true, text: error });
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const formProps: IFormsProp<IAddRecoForms> = {
    operation: onSubmit,
    textButton: "Guardar",
  };

  return (
    <div className='p-1.5 mt-10 flex justify-center items-center text-black'>
      <BackButton classCss='back' />
      <br />
      <label>Menu</label>
      <Form<IAddMenuForms> {...formProps}>
        <input className='w-full text-white' id='img' type='file' />
        <br />
        <br />
        <input className='w-full' type="number" id='name' placeholder='Nombre' />
        <br />
        <br />
      </Form>
    </div>
  );
}
