import styled from 'styled-components';
import { Filter } from 'components/Filter/Filter';

// export const ServiceZone = styled.div`
//   padding: 4px 0;
//   margin-bottom: 8px;
// `;

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
