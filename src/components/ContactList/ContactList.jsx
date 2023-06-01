import { Contact } from 'components/Contact/Contact';
import { Container } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
// import { getContacts } from '../../services/contactsApi';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  // const TEST = getContacts();
  const filter = useSelector(selectFilter);

  const contactsToShow = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <Container>
      <h2>Contacts</h2>
      <ul>
        {contactsToShow.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </Container>
  );
};
