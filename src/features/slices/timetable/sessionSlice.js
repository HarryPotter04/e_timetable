import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/useAxios";
import { getErrorMessage } from "../../../utils/errorUtils";
import errorToast from "../../../utils/errorToast";
import successToast from "../../../utils/successToast";


export const getSessions = createAsyncThunk('get/sessions', async (_, thunkAPI) => {
    try {
        const {data} = await axiosInstance.get('api/v1/sessions/')
        return data
    }catch (error) {
        const errMsg = getErrorMessage(error);
        errorToast(errMsg);
        return thunkAPI.rejectWithValue(errMsg);
    }
})

export const createSession = createAsyncThunk(
    "create/session",
    async (obj, thunkAPI) => {
      try {
        const { data } = await axiosInstance.post("api/v1/sessions/", obj);
        successToast(data.message);
        return data;
      } catch (error) {
        const errMsg = getErrorMessage(error);
        errorToast(errMsg);
        return thunkAPI.rejectWithValue(errMsg);
      }
    }
  );
  
  export const deleteSession = createAsyncThunk(
    "delete/session",
    async (id, thunkAPI) => {
      try {
        const { data } = await axiosInstance.delete(`api/v1/session/${id}/`);
  
        successToast(data.message);
        return data;
      } catch (error) {
        const errMsg = getErrorMessage(error);
        errorToast(errMsg);
        return thunkAPI.rejectWithValue(errMsg);
      }
    }
  );

const sessionSlice = createSlice({
    name: 'session',
    initialState: {
        sessions: [],
        loading: false,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getSessions.fulfilled, (state, action) => {
            state.loading = false;
            state.sessions = action.payload
        })
            .addCase(getSessions.pending, (state, action) => {
            state.loading = true;
        })
            .addCase(getSessions.rejected, (state, action) => {
            state.loading = false;
        })
        .addCase(createSession.fulfilled, (state, action) => {
            state.loading = false;
            state.sessions.push(action.payload.data);
          })
          .addCase(createSession.pending, (state) => {
            state.loading = true;
          })
          .addCase(createSession.rejected, (state) => {
            state.loading = false;
          })
          .addCase(deleteSession.fulfilled, (state, action) => {
            state.loading = false;
            state.sessions = state.sessions.filter(
              (session) => session.id !== action.payload.id
            );
          })
          .addCase(deleteSession.pending, (state, action) => {
            state.loading = true;
          })
          .addCase(deleteSession.rejected, (state, action) => {
            state.loading = false;
          })
    }
})

export const sessionState = (state) => state.timetable.session
export default sessionSlice.reducer;