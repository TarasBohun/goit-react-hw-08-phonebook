import styled from 'styled-components';

export const FilterInput = styled.input`
  font-size: 14px;
  padding-left: 20px;
  border-radius: 6px;
  border: none;
  height: 25px;
  width: 180px;

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
