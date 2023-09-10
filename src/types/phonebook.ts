export interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
}

export interface ContactWithoutId extends Omit<Contact, 'id'> {}

export interface Phonebook {
  contacts: Contact[];
  filter: string;
}
