import { BellIcon } from '@shared/assets';
import { Badge } from 'antd';
import React, { useEffect, useState } from 'react';

export const Notification = () => {
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBadge((prev) => !prev);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Badge size="default" status="processing" dot={showBadge || false} offset={[-9, 9]}>
      <BellIcon />
    </Badge>
  );
};
