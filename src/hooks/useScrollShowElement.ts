import { useCallback, useEffect, useState } from 'react';

export const useScrollShowElement = (shownValue = 100): boolean => {
  const [shownElement, setShownElement] = useState(false);
  const handleScroll = useCallback(() => {
    if (window.scrollY > shownValue) {
      setShownElement(true);
    } else {
      setShownElement(false);
    }
  }, [shownValue]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  return shownElement;
};
