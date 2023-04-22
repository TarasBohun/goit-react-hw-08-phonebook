import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu.js';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';

import { HeaderApp } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderApp>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderApp>
  );
};
