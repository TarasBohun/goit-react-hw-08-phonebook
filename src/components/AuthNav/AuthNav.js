import { NavLink } from 'react-router-dom';
import { NavReglog } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavReglog>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </NavReglog>
  );
};
