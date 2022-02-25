import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import { api } from './services/api';

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
