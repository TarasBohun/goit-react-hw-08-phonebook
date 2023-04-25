import { FormContacts } from 'components/FormContacts';
import { ContactList } from 'components/ContactList';

import { Filter } from 'components/Filter';
import {
  Container,
  ContactsContainer,
  TitleForm,
  TitleContacts,
} from './Contacts.styled';

import { fetchContacts } from 'redux/contacts/getContacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    // console.log('dispatch1');
  }, [dispatch]);

  return (
    <Container>
      <div>
        <TitleForm>Create contact</TitleForm>
        <FormContacts />
      </div>
      <ContactsContainer>
        <TitleContacts>Yours contacts</TitleContacts>
        <Filter />
        <ContactList />
      </ContactsContainer>
    </Container>
  );
};

export default Contacts;
