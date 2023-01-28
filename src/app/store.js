import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'features/contacts/contactsSlice';
import { filterSlice } from 'features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice.reducer,
  },
});
