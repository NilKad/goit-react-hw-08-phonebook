import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const Forms = styled(Form)`
  margin-left: auto;
  margin-right: auto;
  width: 350px;
`;

export const Input = styled(Field)`
  margin-top: 4px;
  font-size: 16px;
  /* display: block; */
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  margin-top: 8px;
  padding: 8px;
  width: 100%;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  background-color: #5e94ff;
  &:hover,
  &:focus {
    background-color: #095afa;
  }
`;

export const ErrorMes = styled(ErrorMessage)`
  color: red;
  /* font-size: 24px; */
`;
