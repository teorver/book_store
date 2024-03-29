import {IBook} from "../../../utils/types.ts";

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

export const fetchBooksRequest = () => ({
    type: FETCH_BOOKS_REQUEST,
});

export const fetchBooksSuccess = (books: IBook) => ({
    type: FETCH_BOOKS_SUCCESS,
    payload: books,
});

const initialState = {
    books: [],
    loading: false,
    error: null,
};

const booksReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_BOOKS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                books: action.payload,
            };
        case FETCH_BOOKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default booksReducer;
