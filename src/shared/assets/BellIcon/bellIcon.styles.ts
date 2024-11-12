import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  0%, 70%, 100% {
    transform: rotate(30deg);
  }
  75% {
    transform: rotate(0deg);
  }
  90% {
    transform: rotate(60deg);
  }
`;

export const SBellIcon = styled.svg`
  width: 27px;
  height: 27px;
  cursor: pointer;
  animation: ${shake} 1.5s ease infinite; /* Настройки анимации */
`;
