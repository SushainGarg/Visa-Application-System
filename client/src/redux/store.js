import {configureStore} from '@reduxjs/toolkit';
import applicantReducer from './applicant/applicantSlice';

export const store = configureStore({
    reducer: {applicant: applicantReducer},
    getmiddleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});