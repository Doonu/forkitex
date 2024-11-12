import styled from 'styled-components';

export const SHeader = styled.header``;

export const STopHeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.core.colorSecondary};
`;

export const SBottomHeader = styled.div`
  display: flex;
  align-items: start;
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => `${theme.breakpoints.maxDesktops}px`};
`;

export const STopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => `${theme.breakpoints.maxDesktops}px`};

  height: 40px;
`;
