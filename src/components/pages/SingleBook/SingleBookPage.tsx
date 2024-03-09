import './SingleBookPage.css';
import { FaArrowLeft } from "react-icons/fa6";

import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import isbnSelector from "../../../store/slices/book/book.selector.ts";
import { useEffect, useState} from "react";
import { IOpenedBook } from "../../../utils/types.ts";

const SingleBookPage = () => {
    const bookISBN = useSelector(isbnSelector);
    console.log(bookISBN.isbn13);
    const[singleBook, setBook] = useState<IOpenedBook | null>(null);

    const getSingleBook = async () => {
        const bookDetails = await fetch(`https://api.itbook.store/1.0/books/${bookISBN.isbn13}`, {});
        const response: IOpenedBook = await bookDetails.json();

        setBook(response);
    }

    useEffect(() => {
        getSingleBook();
    }, [bookISBN]);

    return (
        <section className="single_book-wrapper">
            <Link to="/">
                <FaArrowLeft />
            </Link>
            {singleBook && (<h1>{singleBook.title}</h1>)}
            <div className="book-details">
                {singleBook && (<img src={singleBook.image} alt="#"/>)}
                {singleBook && (<div className="book-main">{singleBook.subtitle}</div>)}
            </div>
            {singleBook && (<div className="book-description">{singleBook.desc}</div>)}
            {/*<div className="subscribe"></div>*/}
            <div className="similar-books"></div>
        </section>
    );
};

export default SingleBookPage;
