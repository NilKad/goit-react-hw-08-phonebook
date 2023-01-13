import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ServiceZone } from 'components/ServiceZone/ServiceZone';
import { useSelector } from 'react-redux';
import * as SC from './Contacts.module';

const Contacts = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  const contacts = useSelector(state => state.contacts.contactsList);

  // console.log('error:', error);
  // console.log('typeOff', typeof error);

  // console.log('contacts: ', contacts);
  // console.log('contacts.length: ', contacts.length);
  return (
    <div>
      {isLoading && '...Loading...'}
      {error && 'error!!!!'}
      {/* <h1>Phonebook</h1> */}
      {/* <ContactForm /> */}
      <SC.TextH2>Contacts phonebook</SC.TextH2>
      {/* <Filter /> */}
      <ServiceZone />
      {/* {contacts.length !== 0 && <ContactList />} */}
      <ContactList />
    </div>
  );
};

export default Contacts;
