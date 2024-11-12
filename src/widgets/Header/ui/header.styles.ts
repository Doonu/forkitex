import styled from 'styled-components';

export const SHeader = styled.header`
  .ant-drawer-mask {
    display: none;
  }
`;

export const STopHeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.core.colorSecondary};
`;

export const SBottomHeader = styled.div`
  display: flex;
  align-items: start;
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => `${theme.breakpoints.maxDesktops}px`};

  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxDesktops}px) {
    padding: 0 15px;
  }
`;

export const STopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => `${theme.breakpoints.maxDesktops}px`};
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxDesktops}px) {
    padding: 0 15px;
  }
`;

export const SInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
