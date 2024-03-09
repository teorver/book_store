import { IBook } from '../utils/types';

// import {useAppDispatch} from "../store/store.ts";
// import {setIsbn} from "../store/slices/book/book.slice.ts";

const booksURL: string = 'https://api.itbook.store/1.0/new';


const getBooksInfo = async () => {
    const response = await fetch(booksURL, {});
    const booksInfo: IBook[] = await response.json();
    console.log(booksInfo.books);
    return booksInfo.books;
};

// const getSingleBook = async ({ isbn13 }) => {
//     const response = await fetch(`https://api.itbook.store/1.0/books/${isbn13}`, {});
//     const singleBookInfo: IOpenedBook = await response.json();
//     const dispatch = useAppDispatch();
//     dispatch(setIsbn({ isbn13 }));
//
//     return singleBookInfo;
// };

export default getBooksInfo;
// export { getSingleBook };
