import PropTypes from 'prop-types';
import { ListItem, Button } from './Contact.styled';
import Box from 'common/components/Box/Box';
import { useDispatch } from 'react-redux';
// import { contactRemove } from 'features/contacts/contactsSlice';
import { deleteContact } from 'features/contacts/api.operations';

export default function Contact({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  return (
    <ListItem>
      <div>{name}:</div>
      <Box
        width={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {number}
        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </Button>
      </Box>
    </ListItem>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
