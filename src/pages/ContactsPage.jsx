
import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contactsSlice.operations';
import { ContactForm } from 'components/contactForm/contactForm';
import { Filter } from 'components/filter/filter';
import { ContactList } from 'components/contactList/contactList';




 const ContactsPage = () => {
  const dispatch = useDispatch();
   
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

    return (
      <div >
        <ContactForm />
        <h2 style={{ textAlign: 'center', marginTop: '20px',color: '#1976D2' }}>Contacts</h2>
        <Filter />
        <ContactList/>
      </div>
    );
  }

export default ContactsPage;