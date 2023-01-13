import styled from 'styled-components';

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  margin-right: 8px;
`;

export const ButtonLogOut = styled.button`
  padding: 4px 12px;
  border-radius: 4px;
  color: white;
  background-color: #5e94ff;
  &:hover,
  &:focus {
    background-color: #095afa;
  }
`;
