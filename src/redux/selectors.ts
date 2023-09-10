import { Phonebook } from '../types/phonebook';

const getSelContacts = (state: Phonebook) => state.contacts;
const getSelFilter = (state: Phonebook) => state.filter;

export { getSelContacts, getSelFilter };
