import { Menu } from 'antd';
import styled from 'styled-components';

export const SMenu = styled(Menu)`
  & .ant-menu-item {
    border-bottom: 1px solid #ededed;
    border-radius: 0;
    padding-left: 0;
    font-weight: 600;
    font-size: 16px;
  }
`;
