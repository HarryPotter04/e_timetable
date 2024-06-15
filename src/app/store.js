import { combineReducers, configureStore } from '@reduxjs/toolkit';
import adminAuthReducer from '../features/slices/admin/adminAuthSlice'; // Import the reducer
import getUserReducer from '../features/slices/admin/getUserSlice';
import userLoginReducer from '../features/slices/admin/userLoginSlice';
import registerReducer from '../features/slices/admin/registerSlice';

const rootReducer = combineReducers({
  admin: combineReducers({
    auth: adminAuthReducer,
    user: userLoginReducer,
    getUser: getUserReducer,
    register: registerReducer, // Make sure this matches the export
  }),
  // users: combineReducers({}) // Uncomment if you have user reducers
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
