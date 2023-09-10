import { Phonebook } from '../types/phonebook';

interface SelState {
  phonebook: Phonebook;
}

const getSelContacts = (state: SelState) => state.phonebook.contacts;
const getSelFilter = (state: SelState) => state.phonebook.filter;

export { getSelContacts, getSelFilter };
