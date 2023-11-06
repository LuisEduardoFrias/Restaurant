"use client";
import NotificationCard, { ModalType } from "cp/notification/notificationCard";

export default function Notification({ show, text }:{ show: boolean, text: string}) {
  return (
    <NotificationCard
      show={show}
      type={2}
      title={"BILL"}
      dialog={text}
      onClick3={(event: any) => {}}
    />
  );
}
