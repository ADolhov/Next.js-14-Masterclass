'use client';

import { useState, useEffect } from "react";

export const useFoo = (initVal) => {
  const [value, setValue] = useState(initVal);

  useEffect(() => {
    const name = initVal + Math.random();
    const i = setInterval(() => {
      setValue(name);
      console.log(value);
    }, 1000);

    return () => clearInterval(i);
  }, [value]);


  return [value, setValue];
}

