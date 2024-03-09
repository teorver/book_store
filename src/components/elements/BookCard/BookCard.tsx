import { IBook } from '../../../utils/types';
import './BookCard.css';
import { getRandomRating } from '../../../utils/helpers';
import { Link } from "react-router-dom";

import { useAppDispatch } from '../../../store/store';
import { setIsbn } from '../../../store/slices/book/book.slice';

const BookCard = ({ image, title, subtitle, price, isbn13 }: IBook) => {
    const dispatch = useAppDispatch();

    const handleISBN = (isbnType: string ) => {
        dispatch(setIsbn({ isbn13: isbnType }));
    }

    return (
        <div className="card-wrapper">
            <div className="img-wrapper">
                <img src={image} alt="#" className="book-img"/>
            </div>
            <div className="bookCard">
                <Link to={`/books/${isbn13}`} onClick={() => handleISBN(isbn13)}>
                    <p className="book-title">{title}</p>
                </Link>
                <span className="book-subtitle">{subtitle}</span>
                <div className="book-footer">
                    <span>{price}</span>
                    <span>{getRandomRating()}</span>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
