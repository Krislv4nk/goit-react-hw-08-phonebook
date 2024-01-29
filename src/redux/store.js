import { configureStore } from "@reduxjs/toolkit";
// import {contactsReducer} from './contacts/contactsSlice';
import { filterReducer } from "./filter/filterSlice";
import { authReducer } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

 export const store = configureStore({
  reducer: {
    contacts: persistReducer(authConfig, authReducer),
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}),});

export const persistor = persistStore(store);




