import * as SC from 'layouts/ContactsLayout.module';

export const AuthMenu = () => {
  return (
    <div>
      <SC.NavMenuLink to="register">Register</SC.NavMenuLink>
      <SC.NavMenuLink to="login">Login</SC.NavMenuLink>
    </div>
  );
};
