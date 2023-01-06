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
// import { getAllContacts } from './API/fetchContacts';

export const App = () => {
  // const isLoading = useSelector(state => state.contacts.isLoading);
  // const error = useSelector(state => state.contacts.error);
  // console.log('error:', error);
  // console.log('typeOff', typeof error);
  return (
    <Routes>
      <Route path="/" element={<ContactsLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
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
