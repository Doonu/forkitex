import { Drawer } from 'antd';
import styled from 'styled-components';

export const SDrawer = styled(Drawer)`
  position: absolute;
  top: 40px;
  height: calc(100vh - 40px) !important;

  & .ant-drawer-body {
    padding: 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & .ant-drawer-header {
    display: none;
  }
`;
