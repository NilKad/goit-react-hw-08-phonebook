import styled from 'styled-components';
export const ContactsList = styled.ul`
  font-size: 18px;
`;

export const ContactsListItem = styled.li`
  margin-bottom: 10px;
  transition: all 500ms linear;
`;

export const Button = styled.button`
  margin-left: 20px;
  font-size: 16px;
  border-radius: 4px;

  &:hover {
    background-color: rgb(221, 221, 221);
  }
  &:active {
    background-color: deepskyblue;
  }
`;

// export const FilterInput = styled(Filter)`
//   font-size: 40px;
//   margin-bottom: 20px;
// `;
// .item {
//   margin-bottom: 10px;
//   transition: all 500ms linear;
// }
// .button {
// margin-left: 20px;
// font-size: 16px;
// border-radius: 4px;
// }

// .button:hover {
//   background-color: rgb(221, 221, 221);
// }
// .button:active {
//   background-color: deepskyblue;
// }
