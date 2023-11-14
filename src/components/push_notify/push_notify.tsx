"use client";
//
import React, { useState, useEffect, useRef } from "react";
import Icon from "cp/icon/icon";
import "./push_notify.css";

export enum TypeNotify {
  post,
  put,
  delete,
}

interface IPushNotifyProps {
  text: string;
  type: TypeNotify;
}

interface ICallBack {
  callback?: () => void;
}

// let timer: number = 10000;
let _subscriber: object = null;

export default function PushNotify({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notify, setNotify] = useState<IPushNotifyProps[]>([]);

  _subscriber = (obj: IPushNotifyProps) => {
    setNotify(prevNotify => [...prevNotify, obj]);
  };

  return (
    <>
      <div className='puchNotify-container'>
        {notify.map((n, i) => (
          <Notify
            key={i}
            {...n}
            callback={() => {
              setNotify(prevNotify =>
                prevNotify.filter((_, index) => index !== i),
              );
            }}
          />
        ))}
      </div>
      {children}
    </>
  );
}

function Notify({ text, type, callback }: IPushNotifyProps & ICallBack) {
  //
  useEffect(() => {
    const timer = setTimeout(callback, 10000);
    return () => clearTimeout(timer);
  }, []);

  const notifyClass =
    type == TypeNotify.post
      ? "post"
      : type == TypeNotify.put
      ? "put"
      : "delete";

  const iconType =
    type == TypeNotify.post
      ? "done"
      : type == TypeNotify.put
      ? "update"
      : "delete";

  return (
    <div className={`puchNotify ${notifyClass}`}>
      <Icon>{iconType}</Icon>
      <span>{text}</span>
    </div>
  );
}

export function usePushNotify() {
  //
  const [pushNotifyObject, setPushNotifyObject] =
    useState<IPushNotifyProps | null>(null);

  useEffect(() => {
    if (pushNotifyObject) {
      _subscriber(pushNotifyObject);
    }
  }, [pushNotifyObject]);

  return (obj: IPushNotifyProps) => setPushNotifyObject(obj);
}
