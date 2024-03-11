import {IOpenedBook} from "./types.ts";

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

export { getRandomRating, sumBooksPrice, handleTotalSum, handleVATValue, vat, cartItems };
