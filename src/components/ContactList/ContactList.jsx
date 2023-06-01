import { Contact } from 'components/Contact/Contact';
import { Container } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsToShow } from 'redux/selectors';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/contacts/operations';

export const ContactsList = () => {
  const contactsToShow = useSelector(selectContactsToShow);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Container>
      <h2>Contacts</h2>
      <ul>
        {contactsToShow?.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </Container>
  );
};
