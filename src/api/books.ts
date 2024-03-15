import {IOpenedBook} from "../utils/types.ts";

const booksURL: string = 'https://api.itbook.store/1.0/new';
const singleBookURL = 'https://api.itbook.store/1.0/books';

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

export default getBooksInfo;

export { getSingleBook };
