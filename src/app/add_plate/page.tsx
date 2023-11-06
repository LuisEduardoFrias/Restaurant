"use client";

import React from "react";
import Link from "next/link";
import BackButton from "cp/back_button/back_button";
import Form, { IFormsProp } from "cp/form/form";

interface IAddMenuForms {
  img?: string;
  name?: string;
  url?: string;
}

export default function AddMenu() {
  const onSubmit = (data: object[]) => {
    fetch("/api/menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  const formProps: IFormsProp<IAddMenuForms> = {
    operation: onSubmit,
    textButton: "Guardar",
  };

  return (
    <div className='p-1.5 mt-10 flex justify-center items-center text-black'>
      <BackButton classCss='back' />
      <br />
      <label>plate</label>
      <Form<IAddMenuForms> {...formProps}>
        <input className='w-full text-white' id='img' type='file' />
        <br />
        <br />
        <input className='w-full' id='name' placeholder='Nombre' />
        <br />
        <br />
        <input className='w-full' id='url' placeholder='Puntuación' />
        <br />
        <br />
      </Form>
    </div>
  );
}
