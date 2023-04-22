import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 30px 20px;
  width: 500px;
  height: fit-content;

  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

export const Input = styled.input`
  font-size: 22px;
  padding-left: 20px;
  border-radius: 6px;
  border: 2px solid black;
  height: 45px;
  width: 100%;
`;

export const SubmitButton = styled.button`
  display: block;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
`;
