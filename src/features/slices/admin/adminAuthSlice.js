import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const profile = Cookies.get('admin_profile') || null;
const user = profile ? JSON.parse(profile) : null;

const adminAuthSlice = createSlice({
    name: 'auth',
    initialState: {
        token: Cookies.get('admin_token') || '',
        profile: user || null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.profile = action.payload;
        },
        Adminlogout: (state) => {
            state.token = null;
            state.profile = null;
            Cookies.remove('admin_token');
            Cookies.remove('admin_token_exp');
            Cookies.remove('admin_profile');
        }
    },
});

export const { setToken, setUser, Adminlogout } = adminAuthSlice.actions;
export const getProfile = (state) => state.admin.auth.profile;
export const getAdminToken = (state) => state.admin.auth.token;

export default adminAuthSlice.reducer;
