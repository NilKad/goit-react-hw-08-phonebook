// import { useEffect, useRef } from 'react';
// import ContactForm from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from 'components/ContactList/ContactList';
// import { useSelector } from 'react-redux';
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
// import { getAllContacts } from './API/fetchContacts';

export const App = () => {
  // const isLoading = useSelector(state => state.contacts.isLoading);
  // const error = useSelector(state => state.contacts.error);
  // console.log('error:', error);
  // console.log('typeOff', typeof error);

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
        {/* <Route path="contacts" element={<Contacts />} /> */}
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
    // <div>
    //   {isLoading && '...Loading...'}
    //   {error && 'error!!!!'}
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   <ContactList />
    // </div>
  );
};
