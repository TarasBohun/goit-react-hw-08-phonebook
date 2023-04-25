import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
  gap: 100px;
  margin-top: 20px;
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  min-height: 256px;
`;

export const TitleForm = styled.h1`
  font-weight: 500;
  font-size: 30px;
  text-align: center;
  color: paleturquoise;
`;

export const TitleContacts = styled.h1`
  font-weight: 500;
  font-size: 30px;
  text-align: center;
  color: paleturquoise;
  margin-bottom: 30px;
`;
