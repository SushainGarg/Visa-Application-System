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
        },
        updateApplicantStart: (state) => {
            state.loading = true;
        },
        updateApplicantSuccess: (state, action) => {
            state.currentApplicant = action.payload;
            state.loading = false;
            state.error = false;
        },
        updateApplicantFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const { SignInStart, SignInSuccess, SignInFailure , updateApplicantFailure , updateApplicantSuccess , updateApplicantStart} = applicantSlice.actions;

export default applicantSlice.reducer;