import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filter } from '../types/phonebook';

const initialState: Filter = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filtered(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const { filtered } = filterSlice.actions;
export default filterSlice.reducer;
