import { useSelector } from 'react-redux';
import { BiSolidContact } from 'react-icons/bi';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { getContacts } from '../../redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className="h-full bg-homeBg bg-cover bg-center bg-fixed p-5">
      <div className="flex flex-col justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <BiSolidContact className="mx-auto" size="75" color="#4f46e5" />
          <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Phonebook
          </h1>
        </div>
        <ContactForm />
        {contacts.length > 0 ? (
          <>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Contacts
            </h2>

            <Filter />
          </>
        ) : (
          <p className="mt-10 text-center text-1xl font-bold leading-9 tracking-tight text-gray-600">
            Your phonebook is empty. Add first contact!
          </p>
        )}
        {contacts.length > 0 && <ContactList />}
      </div>
    </div>
  );
};

export default App;
