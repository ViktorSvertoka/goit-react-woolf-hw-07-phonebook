import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const phoneContacts = {
  items: [
    { id: 'id-1', name: 'Steve Jobs', number: '+38 093 725 2356' },
    { id: 'id-2', name: 'Bill Gates', number: '+38 050 143 6784' },
    { id: 'id-3', name: 'Jeff Bezos', number: '+38 067 567 4532' },
    { id: 'id-4', name: 'Elon Musk', number: '+38 044 456 2245' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: phoneContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
    },
    prepare(newContact) {
      return {
        payload: { id: nanoid(), ...newContact },
      };
    },
    removeContact(state, action) {
      const updateContact = state.items.filter(
        contact => contact.id !== action.payload.id
      );
      state.items = updateContact;
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export const contactsReducer = persistReducer(
  { key: 'contacts', storage },
  contactsSlice.reducer
);
