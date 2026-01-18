import booksReducer, {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  fetchBooksRequest,
  fetchBooksSuccess,
} from './allBooksSlice';

describe('allBooksSlice', () => {
  const initialState = {
    books: [],
    loading: false,
    error: null,
  };

  it('should return the initial state', () => {
    expect(booksReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle FETCH_BOOKS_REQUEST', () => {
    const action = { type: FETCH_BOOKS_REQUEST };
    const expectedState = {
      ...initialState,
      loading: true,
      error: null,
    };
    expect(booksReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FETCH_BOOKS_SUCCESS', () => {
    const books = [{ id: '1', title: 'Test Book' }];
    const action = { type: FETCH_BOOKS_SUCCESS, payload: books };
    const expectedState = {
      ...initialState,
      loading: false,
      books,
    };
    expect(booksReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FETCH_BOOKS_FAILURE', () => {
    const error = 'Error fetching books';
    const action = { type: FETCH_BOOKS_FAILURE, payload: error };
    const expectedState = {
      ...initialState,
      loading: false,
      error,
    };
    expect(booksReducer(initialState, action)).toEqual(expectedState);
  });

  it('should create an action to request books', () => {
    const expectedAction = { type: FETCH_BOOKS_REQUEST };
    expect(fetchBooksRequest()).toEqual(expectedAction);
  });

  it('should create an action for successful book fetch', () => {
    const books = [{ id: '1', title: 'Test Book' }] as any;
    const expectedAction = {
      type: FETCH_BOOKS_SUCCESS,
      payload: books,
    };
    expect(fetchBooksSuccess(books)).toEqual(expectedAction);
  });
});
