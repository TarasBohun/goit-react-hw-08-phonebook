import { FormContacts } from 'components/FormContacts';
import { ContactList } from 'components/ContactList';

import { Filter } from 'components/Filter';
import { Container } from './Contacts.styled';

import { fetchContacts } from 'redux/contacts/getContacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const styles = {
  container: {
    // minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 36,
    textAlign: 'center',
  },
};

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    console.log('dispatch1');
  }, [dispatch]);

  return (
    <Container>
      <div style={styles.container}>
        <h1 style={styles.title}>Phonebook</h1>
      </div>

      <FormContacts />
      <Filter />
      <ContactList />
    </Container>
  );
};

export default Contacts;
