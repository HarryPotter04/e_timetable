import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/useAxios";
import { getErrorMessage } from "../../../utils/errorUtils";
import errorToast from "../../../utils/errorToast";


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
    }
})

export const sessionState = (state) => state.timetable.session
export default sessionSlice.reducer;