import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BiSolidContact } from 'react-icons/bi';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { selectContacts } from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';

const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center p-5">
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
  );
};

export default App;
