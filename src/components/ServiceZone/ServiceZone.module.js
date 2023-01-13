import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const ServiceZoneDiv = styled.div`
  display: flex;
  /* gap: 20px */
  padding: 8px 0;
  margin-bottom: 8px;
  font-size: 16px;
  align-items: center;
`;

export const FormAddContact = styled(Form)`
  display: flex;
  /* display: block; */
  align-items: center;
  /* align-content: center; */
`;

export const Label = styled.label`
  position: relative;
  /* display: block; */
  /* margin-right: 8px; */
  /* margin-left: 16px; */
  margin-right: 16px;
  font-weight: 500;
`;
export const LabelSpan = styled.span`
  margin-right: 8px;
`;

export const Input = styled(Field)`
  /* margin-left: 8px; */
  /* margin-right: 8px; */
  /* display: block; */
  /* margin-right: 8px; */
  padding: 2px 8px;
  font-size: inherit;

  &:focus {
    border-color: blue;
    outline: 1px solid blue;
  }
  &:invalid {
    border-color: red;
  }
  &:invalid:focus {
    outline: 1px solid red;
  }
  /* & .error {
    background-color: red;
  } */
`;

export const ErrorMes = styled(ErrorMessage)`
  position: absolute;
  top: 100%;
  right: 0;
  color: red;
`;

export const ButtonAddHidden = styled.button`
  width: 110px;
  padding: 2px 8px;
  background-color: #5e94ff;
  color: white;
  border-radius: 4px;
  border-color: #095afa;
  margin-right: 16px;
  font-size: inherit;
  &:hover,
  &:focus {
    background-color: #095afa;
  }
  ${props =>
    props.isActive === 'true' &&
    `
  border-color: #0ca4d6;

  background-color:  #66d2f7;
  &:focus, &:hover {
  background-color:  #0ca4d6;

  }
  `}
`;

export const ButtonPlus = styled.button`
  font-weight: 700;
  font-size: inherit;
  border-radius: 4px;
  outline: none;
  color: white;
  border-color: #095afa;
  background-color: #5e94ff;
  &:hover,
  &:focus {
    background-color: #095afa;
  }
  /* height: 100%; */
`;
