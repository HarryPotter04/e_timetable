import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/useAxios";
import { getErrorMessage } from "../../../utils/errorUtils";
import errorToast from "../../../utils/errorToast";


export const getLevels = createAsyncThunk('get/levels', async (_, thunkAPI) => {
    try {
        const {data} = await axiosInstance.get('api/v1/levels/')
        return data
    }catch (error) {
        const errMsg = getErrorMessage(error);
        errorToast(errMsg);
        return thunkAPI.rejectWithValue(errMsg);
    }
})

const levelSlice = createSlice({
    name: 'level',
    initialState: {
        levels: [],
        loading: false,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getLevels.fulfilled, (state, action) => {
            state.loading = false;
            state.levels = action.payload
        })
            .addCase(getLevels.pending, (state, action) => {
            state.loading = true;
        })
            .addCase(getLevels.rejected, (state, action) => {
            state.loading = false;
        })
    }
})

export const levelState = (state) => state.timetable.level
export default levelSlice.reducer;