import { useCallback, useEffect, useState } from 'react';

const useResponsiveSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const setSizes = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', setSizes);
    setSizes()

    return () => {
      window.removeEventListener('resize', setSizes);
    }
  }, []);

  return { width, height };
};

export default useResponsiveSize;