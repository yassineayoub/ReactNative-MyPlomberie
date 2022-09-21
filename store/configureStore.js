import { createStore, combineReducers } from 'redux';

import equipementsReducer from '../reducer/equipementsReducer';
import materialsReducer from '../reducer/materialsReducer';
const rootReducer = combineReducers({ equipementsReducer, materialsReducer });
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
