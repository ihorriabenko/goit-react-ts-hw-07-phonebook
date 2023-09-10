import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact, Phonebook } from '../types/phonebook';

const initialState: Phonebook = {
  contacts: [],
  filter: '',
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    added(state, action: PayloadAction<Contact>) {
      state.contacts.push(action.payload);
    },
    removed(state, action: PayloadAction<string>) {
      const idx = state.contacts.findIndex((el) => el.id === action.payload);
      state.contacts.splice(idx, 1);
    },
    filtered(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const { added, removed, filtered } = phonebookSlice.actions;
export default phonebookSlice.reducer;
