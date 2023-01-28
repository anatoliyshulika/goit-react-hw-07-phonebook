import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { value: [] },
  reducers: {
    contactAdd(state, action) {
      state.value.push(action.payload);
    },
    contactRemove(state, action) {
      state.value = state.value.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { contactAdd, contactRemove } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
};

const pesistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export default pesistedContactsReducer;
