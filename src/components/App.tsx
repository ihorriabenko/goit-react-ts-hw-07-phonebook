import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Section from './Section/Section';
import s from './app.module.css';

const App: React.FC = (): JSX.Element => {
  return (
    <div className={s.app}>
      <Section type='h2' text='Phonebook'>
        <ContactsForm />
      </Section>
      <Section type='h2' text='Contacts'>
        <Filter />
        <ContactsList />
      </Section>
    </div>
  );
};

export default App;
