import { List, Item, Container } from './ContactList.styled';

import { useContacts } from 'hooks/useContacts';
import { deleteContact } from 'redux/contacts/getContacts';
import { useDispatch } from 'react-redux';

export const ContactList = () => {
  const contacts = useContacts();
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Container key={id}>
            <Item>
              {name} - {number}
            </Item>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </Container>
        );
      })}
    </List>
  );
};
