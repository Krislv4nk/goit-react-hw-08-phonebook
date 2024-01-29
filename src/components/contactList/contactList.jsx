import React from 'react';
import { Contact } from "components/contacts/contacts";
import { selectFilteredContacts } from "../../redux/selectors";
import {  useSelector } from "react-redux";
import css from "./contactList.module.css";

export const ContactList = ({handleDeleteBtnClick}) => {
  const filteredContacts = useSelector(selectFilteredContacts);
return (
  <ul className={css.contactList}>
    { filteredContacts.map(({ name, number, id }) => (
      <Contact 
        key={id}
        id={id}
        name={name}
        number={number}
        handleDeleteBtnClick={handleDeleteBtnClick}
      />
    ))}
  </ul>)
}