import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getAllContacts,
  addContact,
  delContact,
} from 'redux/phonebookOperations';

export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: { contactsList: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getAllContacts.fulfilled, (state, { payload }) => {
        state.contactsList = payload;
      })
      .addCase(getAllContacts.rejected, (state, { error }) => {
        state.contactsList = [];
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contactsList.push(payload);
      })
      .addCase(delContact.fulfilled, (state, { payload }) => {
        state.contactsList = state.contactsList.filter(
          ({ id }) => id !== payload
        );
      })
      .addMatcher(
        isAnyOf(getAllContacts.pending, addContact.pending, delContact.pending),
        state => {
          state.error = null;
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllContacts.rejected,
          addContact.rejected,
          delContact.rejected
        ),
        (state, { error }) => {
          state.contactsList = [];
          state.isLoading = false;
          state.error = error;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllContacts.fulfilled,
          addContact.fulfilled,
          delContact.fulfilled
        ),
        state => {
          state.isLoading = false;
        }
      ),
});

export const { addContact: add, del } = contactsSlice.actions;

export const filterSlice = createSlice({
  name: 'filterContact',
  initialState: { filter: '' },
  reducers: {
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
