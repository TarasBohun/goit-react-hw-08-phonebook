import styled from 'styled-components';

export const Form = styled.form`
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

export const Input = styled.input`
  font-size: 18px;
  padding-left: 20px;
  border-radius: 6px;
  /* border: 1px solid black; */
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

export const SubmitButton = styled.button`
  display: block;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
