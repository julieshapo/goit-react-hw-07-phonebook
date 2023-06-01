import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from 'services/contactsApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    return await getContacts();
  }
);

export const createContactThunk = createAsyncThunk(
  'contacts/postContact',
  async data => {
    return await addContact(data);
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    return await deleteContact(id);
  }
);
