import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getAllContacts = createAsyncThunk(
  'phonebook/getAllContacts',
  async () => {
    const response = await axios('/contacts');
    return response.data;
  }
);

const addContact = createAsyncThunk('phonebook/addContact', async data => {
  const response = await axios.post('/contacts/', data);
  return response.data;
});

const delContact = createAsyncThunk('phonebook/delContact', async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data.id;
});

export { getAllContacts, addContact, delContact };
