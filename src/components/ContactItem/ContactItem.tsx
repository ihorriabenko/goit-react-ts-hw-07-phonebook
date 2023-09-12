import { useDeleteContactMutation } from '../../redux/phonebookApiSlice';
import { Contact } from '../../types/phonebook';
import s from './contactItem.module.css';

const ContactItem: React.FC<Contact> = ({
  id,
  name,
  phoneNumber,
}): JSX.Element => {
  const [removeContact, { isLoading }] = useDeleteContactMutation();
  const handleRemoveContact = (id: string) => {
    removeContact(id);
  };

  return (
    <>
      <li className={s.item}>
        <p>{name}</p>
        <p>{phoneNumber}</p>
        <button
          className={s.btn}
          onClick={() => handleRemoveContact(id)}
          disabled={isLoading}
        >
          x
        </button>
      </li>
    </>
  );
};

export default ContactItem;
