import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/book/book.slice';
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
    search: searchReducer,
    // Add other reducers here if needed
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;
