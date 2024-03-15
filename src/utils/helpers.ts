import {IBook, IOpenedBook} from "./types.ts";

const vat = 12.50;
const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

const getRandomRating = () => (Math.random() * 5).toFixed(1);

const sumBooksPrice = () => {
    let booksSum = 0;

    cartItems.map(({ price }: IOpenedBook) => {
        let newVal = +(price.slice(1));
        booksSum += newVal;
    });
    return booksSum;
};

const handleVATValue = (a: number, b: number) => {
    switch (b) {
        case 0: return 0;
        default: return a.toFixed(2);
    }
}

const handleTotalSum = (a: number, b: number) => {
    switch (b) {
        case 0: return 0;
        default: return (a + b).toFixed(2);
    }
};

const totalPages = (a: number, b: number) => Math.ceil(a / b);

const getDisplayedBooksQty = (page: number, pageItems: number, books: IBook[] | null) => {
    const startIndex = (page - 1) * pageItems;
    const endIndex = startIndex + pageItems;
    return books ? books.slice(startIndex, endIndex) : [];
}

export {
    getRandomRating,
    sumBooksPrice,
    handleTotalSum,
    handleVATValue,
    vat,
    cartItems,
    totalPages,
    getDisplayedBooksQty
};
