import { createSlice, nanoid } from '@reduxjs/toolkit';
import initialContacts from '../../components/contacts.json';
import toast from 'react-hot-toast';
import { getContacts } from 'services/contactsApi';

export const getContactsThunk = () => {
  return async dispatch => {
    try {
      dispatch(contactsSliceNew.reducer.fetchPending());
      const data = await getContacts();
      dispatch(contactsSliceNew.reducer.fetchSuccess(data));
    } catch (error) {
      dispatch(contactsSliceNew.reducer.fetchError(error));
    }
  };
};

const initialState = {
  contacts: [],
  isLoading: false,
  error: '',
};

const contactsSliceNew = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchPending: state => {
      state.isLoading = true;
    },
    fetchSuccess: (state, action) => {
      state.isLoading = false;
      state.contacts = action.payload.contacts;
      state.error = '';
    },
    fetchError: (state, action) => {
      state.isLoading = false;
      state.error = state.payload;
    },
  },
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    initContacts: initialContacts,
  },
  reducers: {
    addContact(state, action) {
      if (
        state.initContacts.find(contact => contact.name === action.payload.name)
      ) {
        toast.error(`${action.payload.name} is already in contacts.`);
        return;
      }

      state.initContacts.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact(state, action) {
      state.initContacts = state.initContacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});

export const { addContact, deleteContact, findContact } = contactsSlice.actions;

export default contactsSlice.reducer;
