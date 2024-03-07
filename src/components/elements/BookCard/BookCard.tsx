import { IBook } from '../../../utils/types';
import './BookCard.css';
import { getRandomRating } from '../../../utils/helpers';

const BookCard = ({ image, title, subtitle, price }: IBook) => {

    return (
        <div className="card-wrapper">
            <div className="img-wrapper">
                <img src={image} alt="#" className="book-img"/>
            </div>
            <div className="bookCard">
            <p className="book-title">{title}</p>
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
