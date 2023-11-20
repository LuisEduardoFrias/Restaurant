"use client"
import React, { useState } from "react";

export default function useFetch(url: string) {
  const init = { isError: false, text: "" };

  const [isloader, setIsLoader] = useState(false);
  const [error, setError] = useState(init);

  const handleFetch = async (data: object, method?: string) => {
    try {
        setIsLoader(true);

      const response = await fetch(`api/${url}`, {
        method: method ?? "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const _data = await response.json();

       setIsLoader(false);
      return data;
    } catch (err) {
      setError({ isError: true, text: err });
      
    }
  };

  return [isloader, handleFetch, error];
}
