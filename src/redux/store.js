import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
import { contactsSlice, filterSlice } from './phonebookSlice';
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

// import storage = reduct
const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const authPersistConfig = {
  key: 'authUser',
  storage,
  whitelist: ['token'],
};

const persistAuthReducer = persistReducer(authPersistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    // contacts: persistedContactsReducer,
    contacts: contactsSlice.reducer,
    filterContact: filterSlice.reducer,
    // authUser: authSlice.reducer,
    // authUser: persistReducer(authPersistConfig, authSlice.reducer),
    authUser: persistAuthReducer,
  },
  middleware: middleware,
});

export const persistor = persistStore(store);
// export { store };
