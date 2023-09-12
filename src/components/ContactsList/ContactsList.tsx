import { useAppSelector } from '../../redux/hooks';
import { useFetchContactsQuery } from '../../redux/phonebookApiSlice';
import { getSelFilter } from '../../redux/selectors';
import ContactItem from '../ContactItem/ContactItem';
import s from './contactsList.module.css';

const ContactsList: React.FC = (): JSX.Element => {
  const filter = useAppSelector(getSelFilter);
  const { data: contacts, isLoading, error } = useFetchContactsQuery();

  const renderContacts = () => {
    const filterValue = filter.toLowerCase();

    return contacts!.filter(({ name }) => {
      const nameValue = name.toLowerCase();

      return nameValue.includes(filterValue);
    });
  };

  const getContacts =
    !isLoading && !error
      ? renderContacts().map((el) => (
          <ContactItem
            key={el.id}
            id={el.id}
            name={el.name}
            phoneNumber={el.phoneNumber}
          />
        ))
      : [];

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {getContacts.length > 0 && <ul className={s.list}>{getContacts}</ul>}
    </>
  );
};

export default ContactsList;
