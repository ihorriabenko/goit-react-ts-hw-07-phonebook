import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebookSlice';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
