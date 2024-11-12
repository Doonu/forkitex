import { breakpoints } from '@shared/constants';
import { useMediaQuery } from 'react-responsive';

export const useDevice = () => {
  const isMobile = useMediaQuery({ query: `(max-width: ${breakpoints.maxMobile}px)` });
  const isTablets = useMediaQuery({ query: `(max-width: ${breakpoints.maxTablets}px)` });
  const isLaptops = useMediaQuery({ query: `(max-width: ${breakpoints.maxLaptops}px)` });
  const isDesktop = useMediaQuery({ query: `(min-width: ${breakpoints.maxDesktops}px)` });

  return {
    isMobile,
    isTablets,
    isLaptops,
    isDesktop,
  };
};
