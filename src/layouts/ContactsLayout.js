import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { AuthProfile } from 'components/AuthProfile/AuthProfile';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectAuthIsLogin } from 'redux/selectors';
import * as SC from './ContactsLayout.module';
// import * as SC from

export const ContactsLayout = () => {
  const isLoggedIn = useSelector(selectAuthIsLogin);
  // console.log()
  return (
    <>
      <SC.Header>
        <nav>
          {/* auth welcome logout */}
          <SC.NavMenuLink to="/">Home</SC.NavMenuLink>
          <SC.NavMenuLink to="contacts">Contacts</SC.NavMenuLink>
        </nav>
        {isLoggedIn ? <AuthProfile /> : <AuthMenu />}
      </SC.Header>
      <SC.Main>
        <Outlet />
      </SC.Main>
    </>
  );
};
