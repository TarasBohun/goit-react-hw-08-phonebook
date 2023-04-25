import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  padding: 25px 0;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  transition: all 0.5s;
  &:hover {
    color: paleturquoise;
  }
  &:focus {
    color: paleturquoise;
  }
`;
