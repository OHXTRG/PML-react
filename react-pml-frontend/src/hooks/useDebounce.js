import React, { useCallback, useRef } from "react";

export const useDebounce = (fn, delay) => {
  let timer = useRef();

  return useCallback(
    function (...args) {
      clearTimeout(timer.current);
      return new Promise((resolve) => {
        timer.current = setTimeout(async () => {
          await fn(...args);
          resolve();
        }, delay);
      });
    },
    [fn, delay]
  );
};
