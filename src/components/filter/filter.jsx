import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';
import { selectFilterValue } from '../../redux/contacts/contactSlice.selectors'

import css from "./filter.module.css";


export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilterValue);
  

  const handleFilterChange = (event) => {
    const value = event.target.value;
    const action = setFilter(value);
    dispatch(action);
  };

  return (
    <div className={css.filter}>
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        placeholder="Enter name"
        value={value}
        onChange={handleFilterChange}
      />
    </label></div>
  );
};
