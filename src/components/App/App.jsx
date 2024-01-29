import React, { useEffect } from 'react';
import css from './App.module.css';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactsSlice.operations';
import { ContactForm } from '../contactForm/contactForm';
import { Filter } from '../filter/filter';
import { ContactList } from '../contactList/contactList';




export const App = () => {
  const dispatch = useDispatch();
   
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

    return (
      <div className={css.container}>
        <h1 className={css.phoneBookTitle}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.contactTitle}>Contacts</h2>
        <Filter />
        <ContactList/>
      </div>
    );
  }


