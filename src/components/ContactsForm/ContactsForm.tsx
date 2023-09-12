import { useState } from 'react';
import { ContactWithoutId } from '../../types/phonebook';
import { nanoid } from '@reduxjs/toolkit';
import s from './contactsForm.module.css';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from '../../redux/phonebookApiSlice';

const ContactsForm: React.FC = (): JSX.Element => {
  const [contact, setContact] = useState({
    name: '',
    phoneNumber: '',
  });
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContact((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleAddContact = async (contact: ContactWithoutId) => {
    const userExists = contacts!.find(
      (el) => el.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (userExists) return alert(`${userExists.name} already in contacts`);

    try {
      await addContact({
        id: nanoid(),
        createdAt: Date.now().toString(),
        ...contact,
      });
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    handleAddContact(contact);

    setContact({ name: '', phoneNumber: '' });
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name:
          <input
            className={s.input}
            onChange={handleChange}
            type='text'
            name='name'
            value={contact.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            maxLength={24}
            required
          />
        </label>
        <label className={s.label}>
          Phone:
          <input
            className={s.input}
            onChange={handleChange}
            type='tel'
            name='phoneNumber'
            value={contact.phoneNumber}
            pattern='\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}'
            maxLength={30}
            required
          />
        </label>
        <button className={s.btn}>Add contact</button>
      </form>
    </>
  );
};

export default ContactsForm;
