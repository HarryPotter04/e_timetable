import { combineReducers, configureStore } from '@reduxjs/toolkit';
import adminAuthReducer from '../features/slices/admin/adminAuthSlice'; // Import the reducer

const rootReducer = combineReducers({
  admin: combineReducers({
    auth: adminAuthReducer, // Make sure this matches the export
  }),
  // users: combineReducers({}) // Uncomment if you have user reducers
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
