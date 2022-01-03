import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {   
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import { contactsApi } from './slice';
import logger from 'redux-logger'

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  }}),
  contactsApi.middleware,
  logger,
];

const store = configureStore({
    reducer:{
    [contactsApi.reducerPath]:contactsApi.reducer,},
    middleware,
    devTools:process.env.NODE_ENV === 'development', 
});


export default store