import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import {
  ErrorMessage,
  Field,
  Form,
  FormField,
  SubmitButton,
} from './RegisterForm.style';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          {/* Username */}
          <Field name="name" type="text" placeholder="Username" />
          <ErrorMessage name="Username" component="div" />
        </FormField>
        <FormField>
          {/* Email */}
          <Field name="email" placeholder="Email" type="email" />
          <ErrorMessage name="email" component="div" />
        </FormField>
        <FormField>
          {/* Password */}
          <Field name="password" placeholder="Password" type="password" />
          <ErrorMessage name="password" component="div" />
        </FormField>
        <SubmitButton type="submit">Register</SubmitButton>
      </Form>
    </Formik>
  );
};
