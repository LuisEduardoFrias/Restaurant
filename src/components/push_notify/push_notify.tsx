import "./push_notify.css";
import Icon from "cp/icon/icon";

export enum TypeNotify {
  post,
  put,
  delete,
}

interface IPushNotifyProps {
  show: boolean;
  text: string;
  type: TypeNotify;
  setShow: (show: boolean) => void;
}

export default function PushNotify({
  show,
  text,
  type,
  setShow,
}: IPushNotifyProps) {
  setTimeout(() => {
    setShow(false);
  }, 30000);

  return (
    <>
      {show && (
        <div
          className={`puchNotify-container ${
            type == TypeNotify.post
              ? "post"
              : type == TypeNotify.put
              ? "put"
              : "delete"
          }`}
        >
          <Icon>
            {type == TypeNotify.post
              ? "done"
              : type == TypeNotify.put
              ? "update"
              : "delete"}
          </Icon>
          <span>{text}</span>
        </div>
      )}
    </>
  );
}
