import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from './selectors';
import Section from 'common/components/Section/Section';
import ContactForm from 'features/contacts/components/ContactForm/ContactForm';
import ContactList from 'features/contacts/components/ContactList/ContactList';
import Filter from 'features/filter/Filter';
import Spinner from 'features/spinner/Spinner';
import ErrorPage from 'features/errorPage/ErrorPage';

export default function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <>
      {!error && (
        <div>
          <Section title="Phonebook">
            <ContactForm />
          </Section>
          <Section title="Contacts">
            <Filter />
            <ContactList />
          </Section>
          {isLoading && !error && <Spinner />}
        </div>
      )}
      {!isLoading && error && <ErrorPage />}
    </>
  );
}
