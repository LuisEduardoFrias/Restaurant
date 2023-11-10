"use client";

import { useRouter } from "next/navigation";
import Icon from "../icon/icon";
import { CSSProperties } from "react";

export default function BackButton({
  iconName,
  className,
  style,
  id,
}: {
  iconName?: string;
  className?: string;
  id?: string;
  style?: CSSProperties;
}) {
  const router = useRouter();

  const back = () => {
    router.back();
  };

  return (
    <button
      className={`none-focus none-select ${className}`}
      style={{ ...style }}
      id={id}
      onClick={back}
    >
      <Icon>{iconName ?? "reply_all"}</Icon>
    </button>
  );
}
