import { Route, Routes } from 'react-router-dom';
import { ContactsLayout } from 'layouts/ContactsLayout';
import { Home } from 'pages/Home';
import Contacts from 'pages/Contacts';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshCurrentUser } from 'redux/authOperations';
import PrivateRoute from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { selectAuthIsRefreshing } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  console.log('isRefreshing: ', isRefreshing);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Refreshing...'
  ) : (
    <Routes>
      <Route path="/" element={<ContactsLayout />}>
        <Route index element={<Home />}></Route>
        <Route
          path="contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/login" />}
        />
        <Route
          path="register"
          element={<RestrictedRoute component={Register} />}
          redirectTo="/"
        />
        <Route
          path="login"
          element={<RestrictedRoute component={Login} />}
          redirectTo="/"
        />
      </Route>
    </Routes>

  );
};
