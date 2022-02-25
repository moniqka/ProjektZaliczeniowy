import { combineReducers } from 'redux';
import LanguageReducer from './LanguageReducer';
import ModalReducers from './ModalReducers'
import { api } from 'redux/services/api';

const allReducers = combineReducers({
  LanguageReducer,
  ModalReducers,
  
  [api.reducerPath]: api.reducer,
});

export default allReducers;
