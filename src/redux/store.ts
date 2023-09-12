import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './filterSlice';
import { contactsApi } from './phonebookApiSlice';

export const store = configureStore({
  reducer: {
    filter: phonebookReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
