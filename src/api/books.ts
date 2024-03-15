import {IOpenedBook} from "../utils/types.ts";

const booksURL: string = 'https://api.itbook.store/1.0/new';
const singleBookURL = 'https://api.itbook.store/1.0/books';
const searchURL = 'https://api.itbook.store/1.0/search';

const getBooksInfo = async () => {
    const response = await fetch(booksURL, {});
    const booksInfo = await response.json();
    return booksInfo.books;
};

const getSingleBook = async (bookId_value: string | undefined) => {
    const bookDetails = await fetch(`${singleBookURL}/${bookId_value}`, {});
    const response: IOpenedBook = await bookDetails.json();

    return response;
}

const getSearchResult = async (id: string) => {
    const searchBooks = await fetch(`${searchURL}/${id}`);
    const { books } = await searchBooks.json();

    return { id, books };
};

export default getBooksInfo;

export { getSingleBook, singleBookURL, getSearchResult };
