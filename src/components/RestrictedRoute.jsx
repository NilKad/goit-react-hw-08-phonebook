import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthIsLogin } from 'redux/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  //
  const isLogin = useSelector(selectAuthIsLogin);
  return isLogin ? <Navigate to={redirectTo} /> : <Component />;
};
