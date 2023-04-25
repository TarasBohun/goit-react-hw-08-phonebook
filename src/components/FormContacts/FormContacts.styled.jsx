import styled from 'styled-components';
import { Form as FormikForm, Field as InputField } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 30px 20px;
  width: 300px;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

export const Field = styled(InputField)`
  font-size: 18px;
  padding-left: 20px;
  border-radius: 6px;
  border: none;
  height: 35px;
  width: 280px;

  color: #566574;
  &:focus {
    color: #fff;
  }

  &:hover::-webkit-input-placeholder {
    transition: all 0.3s;
    color: paleturquoise;
  }
  &:focus::-webkit-input-placeholder {
    transition: all 0.3s;
    color: paleturquoise;
  }

  &:hover {
    transition: all 0.3s;
    background-color: rgba(255, 255, 255, 0.3);
  }
  &:focus {
    transition: all 0.3s;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const SubmitButton = styled.button`
  display: block;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
