import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 10px 0;
`;

export const Button = styled.button`
  font-size: 20px;
  text-transform: capitalize;
  min-width: 100px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
  background-color: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #af98e0;
  }
`;
