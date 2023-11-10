import { useState } from "react";

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
import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);

      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.log(error);
    }
  });

  const setValue = value => {
    try {
      // If the passed value is a callback function,
      //  then call it with the existing state.
      const valueToStore = value instanceof Function ? value(state) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setState(value);
    } catch (error) {
      console.log(error);
    }
  };

  return [state, setValue];
}
*/
