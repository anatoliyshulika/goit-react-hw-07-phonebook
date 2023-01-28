import { List } from './ContactList.styled';
import Contact from '../Contact/Contact';
import { getFilter, getContacts } from 'app/selectors';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  function filteredContacts() {
    const normalizeFilterText = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilterText)
    );
  };

  return (
    <List>
      {filteredContacts().map(contact => (
        <Contact contact={contact} key={contact.id}></Contact>
      ))}
    </List>
  );
}
