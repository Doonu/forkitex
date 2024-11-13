import { BellIcon } from '@shared/assets';
import { Badge } from 'antd';
import React, { FC, useEffect, useState } from 'react';

import { INotification } from '../model/notification.types';

export const Notification: FC<INotification> = ({ count }) => {
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
