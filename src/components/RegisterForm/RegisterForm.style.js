import styled from 'styled-components';
import {
  Form as BookForm,
  Field as BookInput,
  ErrorMessage as formikError,
} from 'formik';
import { NavLink } from 'react-router-dom';

export const Form = styled(BookForm)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 30px 20px;
  width: 400px;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

export const Field = styled(BookInput)`
  font-size: 18px;
  padding-left: 20px;
  border-radius: 6px;
  /* border: 2px solid black; */
  border: none;
  height: 35px;
  width: 380px;

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

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
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

export const ErrorMessage = styled(formikError)`
  color: red;
  font-weight: bold;
`;

export const BottomText = styled.p`
  margin-top: 30px;
  text-align: center;
`;

export const StyledLink = styled(NavLink)`
  color: #1976d2;
`;
