import { AuthProfile } from 'components/AuthProfile/AuthProfile';
import { NavLink, Outlet } from 'react-router-dom';
import * as SC from './ContactsLayout.module';
// import * as SC from

export const ContactsLayout = () => {
  return (
    <>
      <SC.Header>
        <nav>
          {/* auth welcome logout */}
          <SC.NavMenuLink to="/">Home</SC.NavMenuLink>
          <SC.NavMenuLink to="contacts">Contacts</SC.NavMenuLink>
        </nav>
        <div>
          <SC.NavMenuLink to="login">Login</SC.NavMenuLink>
          {/* <span> / </span> */}
          <SC.NavMenuLink to="register">Register</SC.NavMenuLink>
        </div>
        <AuthProfile>
          {/* <p>Welcome user</p>
          <button>LogOut</button> */}
        </AuthProfile>
      </SC.Header>
      <SC.Main>
        <Outlet />
      </SC.Main>
    </>
  );
};
