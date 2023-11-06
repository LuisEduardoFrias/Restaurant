"use client";

import React, { useState, useEffect, ReactElement, ChangeEvent } from "react";
import NotificationCard, { ModalType } from "cp/notification/notificationCard";
import LdDualRing from "cp/id_dual_ring/id_dual_ring";

export interface INotification {
  show: boolean;
  type: ModalType;
  title: string;
  text: string;
}

interface IFormsProp {
  operation: (
    data: object[],
    setLoader: (show: booleand) => void,
    setNotif: (obj: INotificarion) => void,
  ) => void;
  children: ReactElement | ReactElement[];
  textButton?: string;
}

export default function Form<T>(props: IFormsProp): ReactElement {
  const init = {
    show: false,
    type: ModalType.notification,
    title: "",
    text: "",
  };

  const [state, setState] = useState<T[]>([]);
  const [notif, setNotif] = useState<INotification>(init);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {}, [notif, showLoader]);

  function Submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowLoader(true);
    props.operation(state, setShowLoader, setNotif);
  }

  function handleChange(
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>,
  ) {
    if (e.currentTarget.type == "file") {
      const file = e.currentTarget.files[0];
      const id = e.currentTarget.id;

      if (file) {
        const reader = new FileReader();

        reader.onloadend = async () => {
          setState({
            ...state,
            [id]: reader.result as string,
          });
        };

        reader.readAsDataURL(file);
      }
    } else {
      setState({
        ...state,
        [e.currentTarget.id]: e.currentTarget.value,
      });
    }
  }

  function addOnChangeToFormComponents(
    child: ReactElement,
    index: number,
  ): ReactElement {
    const { type } = child.props;

    if (type === "input" && child.props.onChange === undefined) {
      return React.cloneElement(child, {
        onChange: handleChange,
        key: index,
      });
    }

    if (type === "textarea" && child.props.onChange === undefined) {
      return React.cloneElement(child, {
        onChange: handleChange,
        key: index,
      });
    }

    if (type === "select" && child.props.onChange === undefined) {
      return React.cloneElement(child, {
        onChange: handleChange,
        key: index,
      });
    }

    if (child.props.onChange === undefined) {
      return React.cloneElement(child, {
        onChange: handleChange,
        key: index,
      });
    }

    return child;
  }

  const formComponents = Array.isArray(props.children)
    ? props.children
    : [props.children];

  const formComponentsWithOnChange = formComponents.map(
    addOnChangeToFormComponents,
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "3px",
        boxSizing: "border-box",
      }}
    >
      <NotificationCard
        show={notif.show}
        type={notif.type}
        title={notif.title}
        dialog={notif.text}
        onClick3={(event: any) => {}}
      />

      <LdDualRing show={showLoader} />

      <form onSubmit={Submit}>
        {formComponentsWithOnChange}
        <button className='w-full text-white border-amber-300 border-2 p-1 m-1'>
          {props.textButton && "Send"}
        </button>
      </form>
    </div>
  );
}
