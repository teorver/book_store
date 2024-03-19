import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/book/book.slice';
import {useDispatch} from "react-redux";
import signUpReducer from "./slices/signUp/signUpReducer";

const rootReducer = combineReducers({
    search: searchReducer,
    signUp: signUpReducer
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;
