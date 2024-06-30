import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/useAxios";
import { getErrorMessage } from "../../../utils/errorUtils";
import errorToast from "../../../utils/errorToast";


export const getDays = createAsyncThunk('get/days', async (_, thunkAPI) => {
    try {
        const {data} = await axiosInstance.get('api/v1/days/')
        console.log(data)
        return data
    }catch (error) {
        const errMsg = getErrorMessage(error);
        errorToast(errMsg);
        console.log(errMsg);
        return thunkAPI.rejectWithValue(errMsg);
    }
})

const daysSlice = createSlice({
    name: 'days',
    initialState: {
        days: [],
        loading: false,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getDays.fulfilled, (state, action) => {
            state.loading = false;
            state.days = action.payload
        })
            .addCase(getDays.pending, (state, action) => {
            state.loading = true;
        })
            .addCase(getDays.rejected, (state, action) => {
            state.loading = false;
        })
    }
})

export const daysState = (state) => state.days.days
export default daysSlice.reducer;