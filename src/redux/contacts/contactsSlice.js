import { createSlice, isAnyOf, nanoid } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import {
  createContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './operations';
import { initialState } from './initialState';

const handlePending = state => {
  state.status = 'pending';
};

const handleFulfilledGet = (state, action) => {
  state.status = 'fulfilled';
  state.contacts = action.payload;
  state.error = '';
};

const handleFulfilledCreate = (state, action) => {
  if (state.contacts.find(contact => contact.name === action.payload.name)) {
    toast.error(`${action.payload.name} is already in contacts.`);
    return;
  }

  state.status = 'fulfilled';
  state.contacts.push(action.payload);
  state.error = '';
};

const handleFulfilledDelete = (state, action) => {
  state.status = 'fulfilled';
  state.contacts = state.contacts.filter(
    contact => contact.id !== action.payload.id
  );
  state.error = '';
};

const handleRejected = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(createContactThunk.fulfilled, handleFulfilledCreate)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(
          getContactsThunk.pending,
          createContactThunk.pending,
          deleteContactThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.rejected,
          createContactThunk.rejected,
          deleteContactThunk.rejected
        ),
        handleRejected
      );
  },
});

export default contactsSlice.reducer;
