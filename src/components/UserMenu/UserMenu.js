import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Div, Title, User } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Div>
      <Title>
        Welcome, <User>{user.name}</User>
      </Title>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Div>
  );
};
