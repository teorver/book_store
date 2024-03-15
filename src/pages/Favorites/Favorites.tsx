import './Favorites.css';
import {FaArrowLeft} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {IBook, IOpenedBook} from '../../utils/types';
import {HeartTwoTone} from "@ant-design/icons";
import {Col, Row} from "antd";
import BookCard from "../../components/BookCard/BookCard.tsx";
import getBooksInfo from "../../api/books.ts";

const Favorites = () => {
    const [bookmarks, setBookmarks] = useState<IOpenedBook[] | []>([]);
    const [books, setBooks] = useState<IBook[] | null>(null);

    useEffect(() => {
        const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites') || '[]');
        setBookmarks(favoritesFromStorage);
        getBooksInfo().then(response => setBooks(response));
    }, []);

    const handleBookmarkDelete = (index: number) => {
        // Create a copy of the bookmarks array
        const updatedBookmarks = [...bookmarks];
        // Remove the selected item from the copy
        updatedBookmarks.splice(index, 1);
        // Update state with the modified array
        setBookmarks(updatedBookmarks);
        // Update local storage with the modified array
        localStorage.setItem('favorites', JSON.stringify(updatedBookmarks));
    };

    return (
        <section className="favorites-wrapper">
            <Link to="/">
                <FaArrowLeft/>
            </Link>
            <h1 className="fav-title">FAVORITES</h1>
            {bookmarks.map((bookmark, index) => (
                <div key={index} className="bookmark-details">
                    <div className="bookmark_img-wrapper">
                        <img src={bookmark.image} alt={bookmark.title} className="bookmark_el-img"/>
                    </div>
                    <div className="bookmark-info">
                        <span className="bookmark_el-title">{bookmark.title}</span>
                        <span className="bookmark_el-subtitle">{bookmark.subtitle}</span>
                        <div className="bookmark_el-price-rating">
                            <span className="bookmark_el-price">{bookmark.price}</span>
                            <span className="bookmark_el-rating">Book Rating: {bookmark.rating}</span>
                        </div>
                    </div>
                    <HeartTwoTone
                        twoToneColor="#eb2f96"
                        onClick={() => handleBookmarkDelete(index)}
                        className="bookmark-delete-btn"
                    />
                </div>
            ))}
            <div className="popular-books">
                <h2 className="title-popular-books">POPULAR BOOKS</h2>
                <Row className="similar-book_grid">
                    <Col xs={{span: 5, offset: 1}} lg={{span: 6, offset: 2}} className="similar-book_el">
                        {books && <BookCard {...books[7]} />}
                    </Col>
                    <Col xs={{span: 11, offset: 1}} lg={{span: 6, offset: 2}} className="similar-book_el">
                        {books && <BookCard {...books[12]} />}
                    </Col>
                    <Col xs={{span: 5, offset: 1}} lg={{span: 6, offset: 2}} className="similar-book_el">
                        {books && <BookCard {...books[18]} />}
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Favorites;
