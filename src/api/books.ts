const booksURL: string = 'https://api.itbook.store/1.0/new';

const getBooksInfo = async () => {
    const response = await fetch(booksURL, {});
    const booksInfo = await response.json();
    return booksInfo.books;
};

export default getBooksInfo;
