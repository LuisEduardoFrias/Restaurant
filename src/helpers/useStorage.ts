//import { useState, useEffect } from "react";

export default function useStorage() {
  const getData = (key: string) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.log(error);
    }
  };

  const setData = (key: string, data: object) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  return [getData, setData];
}

/*
export default function useStorage(key, initialState) {
 
  const [state, setState] = useState(initialState);
  
  useEffect(()=>{
   const item = localStorage.getItem(key);
   const data = JSON.parse(item);
   if(data) {
    setState(data);
   }
  },[]);
  
  useEffect(()=>{
   localStorage.setItem(key,state);
  },[state]);
  
  return [state,setState];
  
}
*/