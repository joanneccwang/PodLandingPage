import { useState, useEffect } from 'react';
import { breakpoints } from '@utils/breakpoints';

const useBreakPoints = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleWindowSizeChange = () => {
    const mobileMaxWidth = breakpoints[0];
    if (window.innerWidth <= mobileMaxWidth) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []); // TODO: throttle it

  return { isMobile };
};
export default useBreakPoints;
