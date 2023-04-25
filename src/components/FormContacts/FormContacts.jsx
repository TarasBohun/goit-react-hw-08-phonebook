import { Formik, ErrorMessage } from 'formik';
import { Form, SubmitButton, Field } from './FormContacts.styled';

import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks/useContacts';
import { addContact } from 'redux/contacts/getContacts';

export const FormContacts = () => {
  const dispatch = useDispatch();
  const contacts = useContacts();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        if (
          contacts.find(
            contact => contact.name.toLowerCase() === values.name.toLowerCase()
          )
        ) {
          alert(`${values.name} is already in contacts`);
          return;
        }
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" />
        </label>

        <label>
          <Field
            type="tel"
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" />
        </label>

        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    </Formik>
  );
};
