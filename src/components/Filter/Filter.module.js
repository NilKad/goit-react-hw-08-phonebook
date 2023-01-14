import { Field } from 'formik';
import styled from 'styled-components';

export const FilterDiv = styled.div`
  padding: 4px 0;
  margin-bottom: 8px;
`;

export const Input = styled(Field)`
  width: 250px;
  border: 1px solid grey;
  display: block;
  outline: none;
  border-radius: 2px;
  padding: 4px 8px;
  font-size: 16px;
  &:focus {
    outline: 1px solid blue;
  }

  ${props =>
    props.emptycontacts === 'true' &&
    !props.disabled &&
    `
      border-color: red;
      &:focus {
      boder-color: red;
      outline: 1px solid red;}
    `}
`;

// .input {
// border: 1px solid grey;
// display: block;
// margin-top: 5px;
// outline: none;
// height: 18px;
// border-radius: 2px;
// }

// .input:focus {
//   border-color: blue;
//   outline: 1px solid blue;
// }
// .input:invalid:focus {
//   border-color: red;
//   outline: 1px solid red;
// }
