import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import { Book_isbn } from './store.types';
import { isbnReducer } from './slices/slices';

const rootReducer = combineReducers({
    [Book_isbn.CURRENT_ISBN]: isbnReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer,
});

const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;
