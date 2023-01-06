// import { Button } from 'pages/FormStyles.module';
import * as SC from './AuthProfile.module';

export const AuthProfile = () => {
  return (
    <SC.Profile>
      <SC.Text>Welcome user</SC.Text>
      <SC.ButtonLogOut type="button">LogOut</SC.ButtonLogOut>
    </SC.Profile>
  );
};
