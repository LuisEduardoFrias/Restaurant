"use client";
import NotificationCard, { ModalType } from "cp/notification/notificationCard";

export default function Notification({ show }: boolean) {
  return (
    <NotificationCard
      show={show}
      type={ModalType.error}
      title={"Data Base"}
      dialog={"There isn't data in the database."}
      onClick3={(event: any) => {}}
    />
  );
}
