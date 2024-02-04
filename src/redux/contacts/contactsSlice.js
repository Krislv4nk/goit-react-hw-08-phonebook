import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContactThunk, deleteContactThunk } from './contactsSlice.operations';

const initialState = {
  contacts: {
    contacts: [],
    isLoading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, action.payload];;
        state.error = null;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
.addMatcher(
  isAnyOf(
    fetchContacts.pending,
    addContactThunk.pending,
    deleteContactThunk.pending
  ),
  state => {
    state.isLoading = true;
    state.error = null;
  }
    )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContactThunk.rejected,
          deleteContactThunk.rejected 
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      
  },
});


export const contactsReducer = contactsSlice.reducer;