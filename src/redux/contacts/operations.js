import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://647855a4362560649a2d9138.mockapi.io/api/v1';

export const getContactsThunk = createAsyncThunk(
  'contacts/get',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const createContactThunk = createAsyncThunk(
  'contacts/create',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// USUAL FETCH

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { addContact, deleteContact, getContacts } from 'services/contactsApi';

// export const getContactsThunk = createAsyncThunk('contacts/get', async () => {
//   return await getContacts();
// });

// export const createContactThunk = createAsyncThunk(
//   'contacts/create',
//   async data => {
//     return await addContact({ data });
//   }
// );

// export const deleteContactThunk = createAsyncThunk(
//   'contacts/delete',
//   async id => {
//     return await deleteContact(id);
//   }
// );
