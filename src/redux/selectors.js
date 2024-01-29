import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.contacts;

export const selectContactsIsLoading = createSelector(
    selectContacts,
    contacts => contacts.contacts.isLoading
);
export const selectContactsIsError = createSelector(
    selectContacts,
    contacts => contacts.contacts.error
);

export const selectContactsItems = createSelector(
    selectContacts,
    contacts => contacts.contacts.items
);


export const selectFilter = state => state.filter.filter;

export const selectFilterValue = createSelector(
    selectFilter,
    filter => filter.filter
)
export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    }
  );