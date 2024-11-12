import styled from 'styled-components';

export const SLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  &:hover {
    transition: opacity 0.5s;
    opacity: 0.5;
  }
`;

export const City = styled.div`
  color: ${({ theme }) => theme.core.colorTextSecondary};
`;
