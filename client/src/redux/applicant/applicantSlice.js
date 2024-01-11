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
        deleteApplicantStart: (state) => {
            state.loading = true;
        },
        deleteApplicantSuccess: (state) => {
            state.currentApplicant = null;
            state.loading = false;
            state.error = false;
        },
        deleteApplicantFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        signOut: (state) => {
            state.currentApplicant = null;
            state.loading = false;
            state.error = false;
        },
    }
});

export const {
  SignInStart,
  SignInSuccess,
  SignInFailure,
  updateApplicantFailure,
  updateApplicantSuccess,
  updateApplicantStart,
  deleteApplicantFailure,
  deleteApplicantSuccess,
  deleteApplicantStart,
  signOut,
} = applicantSlice.actions;

export default applicantSlice.reducer;