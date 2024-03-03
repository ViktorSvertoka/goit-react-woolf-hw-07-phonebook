import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <ul className="divide-y divide-gray-100">
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
