import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Contact {
  createdAt: string;
  name: string;
  phoneNumber: string;
  id: string;
}

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64fdd551596493f7af7ea5e1.mockapi.io/',
    // here could be prepareHeaders
  }),
  tagTypes: ['Contacts'],
  endpoints(builder) {
    return {
      fetchContacts: builder.query<Contact[], void>({
        query: () => 'contacts',
        providesTags: ['Contacts'],
      }),
      addContact: builder.mutation<void, Contact>({
        query: (body) => ({
          url: 'contacts',
          method: 'POST',
          body,
        }),
        invalidatesTags: ['Contacts'],
      }),
      deleteContact: builder.mutation<void, string>({
        query: (id) => ({
          url: `contacts/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Contacts'],
      }),
    };
  },
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
