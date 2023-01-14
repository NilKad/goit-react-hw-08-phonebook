import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';
import { ServiceZone } from 'components/ServiceZone/ServiceZone';
import { useSelector } from 'react-redux';
import { selectContactsError, selectContactsIsLoading } from 'redux/selectors';
import * as SC from './Contacts.module';

const Contacts = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  return (
    <div>
      {isLoading && '...Loading...'}
      {error && 'error!!!!'}
      <SC.TextH2>Contacts phonebook</SC.TextH2>
      <ServiceZone />
      <ContactList />
    </div>
  );
};

export default Contacts;
