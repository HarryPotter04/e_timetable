import { combineReducers, configureStore } from "@reduxjs/toolkit";
import adminAuthReducer from "../features/slices/admin/adminAuthSlice"; // Import the reducer
import getUserReducer from "../features/slices/admin/getUserSlice";
import userLoginReducer from "../features/slices/admin/userLoginSlice";
import registerReducer from "../features/slices/admin/registerSlice";
import timetableReducer from "../features/slices/timetable/timetableSlice";
import daysReducer from "../features/slices/days/daysSlice";
import departmentReducer from "../features/slices/timetable/departmentSlice";
import facultyReducer from "../features/slices/timetable/facultySlice";
import semesterReducer from "../features/slices/timetable/semesterSlice";
import levelReducer from "../features/slices/timetable/levelSlice";
import sessionReducer from "../features/slices/timetable/sessionSlice";

const rootReducer = combineReducers({
  admin: combineReducers({
    auth: adminAuthReducer,
    user: userLoginReducer,
    getUser: getUserReducer,
    register: registerReducer, // Make sure this matches the export
  }),

  timetable: combineReducers({
    timetable: timetableReducer,
    department: departmentReducer,
    faculty: facultyReducer,
    semester: semesterReducer,
    level: levelReducer,
    session: sessionReducer,
  }),
  days: combineReducers({
    days: daysReducer,
  }),
  // users: combineReducers({}) // Uncomment if you have user reducers
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
