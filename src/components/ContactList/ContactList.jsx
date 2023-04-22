import { List, Item, Container } from './ContactList.styled';

import { useContacts } from 'hooks/useContacts';
import { deleteContact } from 'redux/contacts/getContacts';
import { useDispatch } from 'react-redux';
// import { selectIsLoading } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useContacts();
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Container key={id}>
            <Item>
              {name}: {number}
            </Item>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              {/* {isLoading ? 'Loading' : 'Delete'} */}
              Delete
            </button>
          </Container>
        );
      })}
    </List>
  );
};
