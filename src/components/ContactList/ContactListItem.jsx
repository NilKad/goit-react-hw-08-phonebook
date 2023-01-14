import * as SC from './ContactList.module';
import PropTypes from 'prop-types';

export const ContactListItem = ({ element, children }) => {
  const { name, number } = element;
  return (
    <SC.ContactsListItem>
      {name}: {number}
      {children}
    </SC.ContactsListItem>
  );
};

ContactListItem.propTypes = {
  element: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node,
};
