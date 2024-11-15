import React, { FC, SVGProps } from 'react';

interface MenuProps extends SVGProps<SVGSVGElement> {
  isOpen: boolean;
}

export const MenuIcon: FC<MenuProps> = ({ isOpen, ...props }) => {
  if (isOpen) {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.7911 0.209367C17.5142 -0.06751 17.0653 -0.0675106 16.7884 0.209367L9 7.99781L1.21156 0.209367C0.934684 -0.0675106 0.485778 -0.06751 0.208901 0.209367C-0.0679766 0.486244 -0.0679767 0.935151 0.2089 1.21203L7.99734 9.00047L0.2089 16.7889C-0.0679772 17.0658 -0.0679771 17.5147 0.2089 17.7916C0.485777 18.0684 0.934683 18.0684 1.21156 17.7916L9 10.0031L16.7884 17.7916C17.0653 18.0684 17.5142 18.0684 17.7911 17.7916C18.068 17.5147 18.068 17.0658 17.7911 16.7889L10.0027 9.00047L17.7911 1.21203C18.068 0.935151 18.068 0.486244 17.7911 0.209367Z"
          fill="white"
        />
      </svg>
    );
  }

  return (
    <svg
      width="18"
      height="15"
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.5C0 0.947715 0.447715 0.5 1 0.5H17C17.5523 0.5 18 0.947715 18 1.5C18 2.05228 17.5523 2.5 17 2.5H1C0.447716 2.5 0 2.05228 0 1.5ZM0 7.5C0 6.94772 0.447715 6.5 1 6.5H17C17.5523 6.5 18 6.94772 18 7.5C18 8.05228 17.5523 8.5 17 8.5H1C0.447716 8.5 0 8.05228 0 7.5ZM1 12.5C0.447715 12.5 0 12.9477 0 13.5C0 14.0523 0.447716 14.5 1 14.5H17C17.5523 14.5 18 14.0523 18 13.5C18 12.9477 17.5523 12.5 17 12.5H1Z"
        fill="white"
      />
    </svg>
  );
};
