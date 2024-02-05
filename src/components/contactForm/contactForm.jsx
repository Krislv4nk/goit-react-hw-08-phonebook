import React, { useState } from 'react';
import {selectContacts} from '../../redux/contacts/contactSlice.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk} from '../../redux/contacts/contactsSlice.operations';
import Notiflix from 'notiflix';
import css from "./contactForm.module.css";


export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleNumberChange = (evt) => {
    setNumber(evt.target.value);
    
  };

  const handleAddContact = (evt) => {
    evt.preventDefault();


    const formData = { name, number };

    const hasDuplicates = contacts.some(
      ({ name, number }) =>
        name.toLowerCase() === formData.name.toLowerCase() || 
        number === formData.number
    );
    
    if (hasDuplicates) {
      return Notiflix.Notify.failure(`Contact ${formData.name} is already in contacts.`);
      
    }
    const newContact = {
      ...formData,
    };
    const action = addContactThunk(newContact);
    dispatch(action);

    setName('');
    setNumber('');
  };

  
  return (
      <div className={css.container}>
      <form className={css.contactForm} onSubmit={handleAddContact}>
      <label className={css.label}>
        Name
        <input
          className={css.contactInput}
          type="text"
          name="name"
          placeholder="Enter name"
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.contactInput}
          type="tel"
          name="number"
          placeholder="Enter phone number"
          required
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button className={css.addContactBttn} type="submit">
        Add contact
      </button>
    </form></div>
  );
}



