import { createStore, combineReducers } from 'redux';

import equipementsReducer from '../reducer/equipementsReducer';
const rootReducer = combineReducers({ equipementsReducer });
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
