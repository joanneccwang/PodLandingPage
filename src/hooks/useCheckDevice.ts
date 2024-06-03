import { useState, useEffect } from 'react';
import { breakpoints } from '@utils/breakpoints';

const useBreakPoints = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPad, setIsPad] = useState(false);
  const handleWindowSizeChange = () => {
    const mobileMaxWidth = breakpoints[0];
    const padMaxWidth = breakpoints[1];
    if (window.innerWidth <= mobileMaxWidth) {
      setIsMobile(true);
      setIsPad(false);
    } else if (window.innerWidth <= padMaxWidth) {
      setIsMobile(false);
      setIsPad(true);
    } else {
      setIsMobile(false);
      setIsPad(false);
    }
  };

  useEffect(() => {
    handleWindowSizeChange();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []); // TODO: throttle it

  return { isMobile, isPad };
};
export default useBreakPoints;
