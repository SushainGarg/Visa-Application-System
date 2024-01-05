import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentApplicant: null,
    loading: false,
    error: false,
};

const applicantSlice = createSlice({
    name: 'applicant',
    initialState,
    reducers: {
        SignInStart: (state) => {
            state.loading = true;
        },
        SignInSuccess: (state, action) => {
            state.currentApplicant = action.payload;
            state.loading = false;
            state.error = false;
        },
        SignInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { SignInStart, SignInSuccess, SignInFailure } = applicantSlice.actions;

export default applicantSlice.reducer;