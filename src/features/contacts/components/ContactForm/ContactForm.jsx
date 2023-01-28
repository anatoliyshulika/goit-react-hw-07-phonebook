import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import Box from 'common/components/Box/Box';
import chekExistName from 'common/services/chekExistName';
import chekExistNumber from 'common/services/chekExistNumber';
import { selectContacts } from 'app/selectors';
import { addContact } from 'features/contacts/api.operations';
import { AddContactForm, Label, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().phone().required(),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  function contactAdd(values, actions) {
    const { name, number } = values;
    const contact = {
      name,
      number,
    };

    if (chekExistName(name, contacts)) {
      window.alert(name + ' is already in contacts');
    } else if (chekExistNumber(number, contacts)) {
      window.alert('Number ' + number + ' is already in contacts');
    } else {
      dispatch(addContact(contact));
      actions.resetForm();
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={contactAdd}
      validationSchema={schema}
    >
      <AddContactForm>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></Input>
        <Box width={2} height={1} mt={2}>
          <ErrorMessage name="name" />
        </Box>

        <Label htmlFor="number">Number</Label>
        <Input
          id="number"
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></Input>
        <Box width={3} height={1} mt={2}>
          <ErrorMessage name="number" />
        </Box>

        <Button type="submit">Add contact</Button>
      </AddContactForm>
    </Formik>
  );
}
