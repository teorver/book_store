import { IOpenedBook} from "./types.ts";
import React from "react";

const vat = 12.50;
const getLocalStorageCart = JSON.parse(localStorage.getItem('cart') || '[]');
const getFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');

const handleLocalStorage = (value: IOpenedBook[]) => {
    localStorage.setItem('cart', JSON.stringify(value));
}

const handleFavorites = (value: IOpenedBook[]) => {
    localStorage.setItem('favorites', JSON.stringify(value));
}

const getRandomRating = () => (Math.random() * 5).toFixed(0);

const sumBooksPrice = (bookQty: number) => {
    let booksSum: number = 0;

    getLocalStorageCart.forEach(({ price }: IOpenedBook) => {
        if (price) {
            let newVal: number = +(price.slice(1));
            booksSum += newVal;
        }

        booksSum *= bookQty;
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

const handleBookQty = (qtyValue: number, action: string, bookQty: number, callBackFunc:  React.Dispatch<React.SetStateAction<number>>) => {
    let updatedQty = qtyValue;

    if (action === 'increase') {
        updatedQty += 1;
        bookQty += 1;
    } else if (action === 'decrease') {
        updatedQty = Math.max(updatedQty - 1, 1);
        bookQty -= 1;
    }
    callBackFunc(updatedQty);
};

export {
    getRandomRating,
    sumBooksPrice,
    handleTotalSum,
    handleVATValue,
    vat,
    getLocalStorageCart,
    getFavorites,
    handleFavorites,
    totalPages,
    handleBookQty,
    handleLocalStorage,
};
