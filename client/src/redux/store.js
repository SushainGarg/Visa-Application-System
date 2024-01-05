import { combineReducers, configureStore } from '@reduxjs/toolkit'; // import from redux toolkit
import applicantReducer from './applicant/applicantSlice'; // import reducer
import { persistReducer , persistStore} from 'redux-persist'; // imports from redux-persist
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const rootReducer = combineReducers({ applicant: applicantReducer });

const persistConfig = {
    key : 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});


export const persistor = persistStore(store);