import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors';
import { removeContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <ul className="divide-y divide-gray-100">
        {contacts.map(contact => (
          <li className="flex justify-between gap-x-6 py-5" key={contact.id}>
            {`${contact.name} : ${contact.number}`}
            {
              <button
                className="flex w-24px justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="button"
                name="delete"
                onClick={() => {
                  dispatch(removeContact(contact));
                }}
              >
                delete
              </button>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
