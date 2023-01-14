import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authOperations';
import { selectAuthUser } from 'redux/selectors';
import * as SC from './AuthProfile.module';

export const AuthProfile = () => {
  const authUser = useSelector(selectAuthUser);
  const dispatch = useDispatch();

  return (
    <SC.Profile>
      <SC.Text>Welcome {authUser.name}</SC.Text>
      <SC.ButtonLogOut type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </SC.ButtonLogOut>
    </SC.Profile>
  );
};
