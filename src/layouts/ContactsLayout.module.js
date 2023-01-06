import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  margin-left: 8px;
  margin-right: 8px;
  display: flex;
  padding: 16px 16px;
  border-bottom: 2px solid grey;
  justify-content: space-between;
  font-weight: 500;
  align-items: center;
  /* width: 350px; */
`;

export const NavMenuLink = styled(NavLink)`
  margin-right: 8px;
  &.active {
    color: blue;
  }
`;

export const Main = styled.main`
  margin-left: 8px;
  margin-right: 8px;
  padding-top: 16px;
`;
