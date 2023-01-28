import Section from 'common/components/Section/Section';
import ContactForm from 'features/contacts/components/ContactForm/ContactForm';
import ContactList from 'features/contacts/components/ContactList/ContactList';
import Filter from 'features/filter/Filter';

export default function App() {
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
}
