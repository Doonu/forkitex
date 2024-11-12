import { useLocation } from 'react-router-dom';

export const useMenuActive = () => {
  const location = useLocation();

  const path = location.pathname;
  const match = path.match(/^\/([^/]+)/);

  if (match) {
    return match[1];
  }

  return 'home';
};
