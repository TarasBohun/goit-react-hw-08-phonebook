import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavReglog = styled.div`
  display: flex;
  gap: 30px;
  padding: 25px;
  /* color: #fff; */
  /* text-decoration: none;
  text-transform: none;
  background-color: aliceblue; */
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  transition: all 0.3s;
  &:hover {
    color: paleturquoise;
  }
  &:focus {
    color: paleturquoise;
  }
`;
