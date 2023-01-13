import { useSelector } from 'react-redux';
import { Route, Navigate, Outlet } from 'react-router-dom';

import { selectAuthIsLogin, selectAuthIsRefreshing } from 'redux/selectors';

const PrivateRoute = ({ component: Component, redirectTo }) => {
  const isLogin = useSelector(selectAuthIsLogin);
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  console.log('isLogin: ', isLogin);
  console.log('isRefreshing: ', isRefreshing);
  const shouldRedirect = !isRefreshing && !isLogin;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
