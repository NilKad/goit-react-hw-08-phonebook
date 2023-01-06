import styled from 'styled-components';

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  /* margin: 0; */
  margin-right: 8px;
`;

export const ButtonLogOut = styled.button`
  /* margin-top: 8px; */
  padding: 4px 12px;
  /* width: 100%; */
  border-radius: 4px;
  color: white;
  background-color: #5e94ff;
  &:hover,
  &:focus {
    background-color: #095afa;
  }
`;
