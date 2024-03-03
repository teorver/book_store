import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

const setupStore = () => configureStore({
    reducer: rootReducer,
});

const store = setupStore();

export default store;
