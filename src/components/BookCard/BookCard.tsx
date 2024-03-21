import { IBook } from '../../utils/types';
import './BookCard.css';
import { getRandomRating } from '../../utils/helpers';
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';

const BookCard = ({ image, title, subtitle, price, isbn13 }: IBook) => {
    const bookRating = getRandomRating();

    return (
        <div className="card-wrapper">
            <div className="img-wrapper">
                <img src={image} alt="#" className="book-img"/>
            </div>
            <div className="bookCard">
                <Link to={`/books/${isbn13}`} >
                    <p className="book-title">{title}</p>
                </Link>
                <span className="book-subtitle">{subtitle}</span>
                <div className="book-footer">
                    <span>{price}</span>
                    <Rating name="disabled" value={+bookRating} disabled />
                </div>
            </div>
        </div>
    );
};

export default BookCard;
