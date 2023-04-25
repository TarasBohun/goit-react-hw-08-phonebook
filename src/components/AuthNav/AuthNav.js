// import { NavLink } from 'react-router-dom';
import { NavReglog, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavReglog>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </NavReglog>
  );
};
