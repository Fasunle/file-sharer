import {useState} from 'react';

export const getLoadingState = () => {
  const [current, setCurrent] = useState(false);

  return {
    isLoading: current,
    setLoadingState: (state: boolean = false) => {
      if (state) {
        setCurrent(state);
      } else {
        setCurrent(!current);
      }
    },
  };
};
