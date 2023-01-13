import * as SC from './ContactList.module';
import { useEffect } from 'react';
import { ContactListItem } from './ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
// import { del } from 'redux/phonebookSlice';
// import { delContact, getAllContacts } from 'redux/_phonebookOperations_old';
import { Filter } from 'components/Filter/Filter';
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from 'notistack';
import { delContact, getAllContacts } from 'redux/phonebookOperations';
// import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contactsList);
  const filter = useSelector(state => state.filterContact.filter);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const contactList = contacts.filter(f => {
    return f.name.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const deletePhonebookID = id => {
    dispatch(delContact(id));
    enqueueSnackbar('delete success', { variant: 'success' });
  };

  const contactsNull = contacts.length === 0;

  return (
    <>
      <Filter
        emptyContacts={contactList.length === 0}
        disabled={contactsNull}
      />
      {contactList.length > 0 && (
        <Table sx={{ width: '40%' }} size="small">
          <TableHead>
            <TableRow sx={{ background: 'lightgrey', textAlign: 'center' }}>
              <TableCell sx={{ width: '50%', textAlign: 'center' }}>
                Full Name
              </TableCell>
              <TableCell sx={{ textAlign: 'center' }}>Phone Number</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contactList.map(el => {
              return (
                <TableRow hover key={el.id}>
                  <TableCell>{el.name}</TableCell>
                  <TableCell sx={{ textAlign: 'right' }}>{el.number}</TableCell>
                  <TableCell sx={{ textAlign: 'right' }}>
                    {
                      <IconButton onClick={() => deletePhonebookID(el.id)}>
                        <DeleteIcon />
                      </IconButton>
                    }
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        // <SC.ContactsList>
        //   {contactList.map(el => {
        //     return (
        //       <ContactListItem key={el.id} element={el}>
        //         <SC.Button
        //           type="button"
        //           onClick={() => deletePhonebookID(el.id)}
        //         >
        //           Delete
        //         </SC.Button>
        //       </ContactListItem>
        //     );
        //   })}
        // </SC.ContactsList>
      )}
    </>
  );
};
