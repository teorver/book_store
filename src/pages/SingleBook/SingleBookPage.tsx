import './SingleBookPage.css';
import {FaArrowLeft} from "react-icons/fa6";
import {SlSocialFacebook, SlSocialTwitter} from "react-icons/sl";
import {BsThreeDots} from "react-icons/bs";
import {RiArrowDownSLine} from "react-icons/ri";
import type {TabsProps} from 'antd';
import {Button, Col, Row, Tabs} from 'antd';
import {HeartOutlined} from '@ant-design/icons';

import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IBook, IOpenedBook} from "../../utils/types.ts";
import BookCard from "../../components/BookCard/BookCard.tsx";
import getBooksInfo from "../../api/books.ts";

import { getSingleBook } from "../../api/books.ts";
import { getLocalStorageCart } from "../../utils/helpers.ts";

const SingleBookPage = () => {
    const { bookId } = useParams<{ bookId: string }>();

    const [books, setBooks] = useState<IBook[] | null>(null);
    const [singleBook, setBook] = useState<IOpenedBook | null>(null);

    useEffect(() => {
        getSingleBook(bookId).then(response => setBook(response));
        getBooksInfo().then(response => setBooks(response));
    }, [bookId]);

    const onChange = (key: string) => {
        if (key === '3') {
            const amazonURL = `https://www.amazon.com/dp/${singleBook?.isbn10}/?tag=isbndir-20#customerReviews`;
            window.open(amazonURL, '_blank');
        }
    };

    const tabs: TabsProps['items'] = [
        {
            key: '1',
            label: 'Description',
            children: `${singleBook?.desc}`,
        },
        {
            key: '2',
            label: 'Authors',
            children: `${singleBook?.authors}`,
        },
        {
            key: '3',
            label: 'Reviews',
        },
    ];

    const addToCart = () => {
        const isBookInCart = getLocalStorageCart
            .some((cartItem: IOpenedBook) => cartItem.isbn13 === singleBook?.isbn13);

        if (!isBookInCart && singleBook) {
            const updatedCart = [...getLocalStorageCart, singleBook];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
        alert('Book added to cart!');
    };

    const saveToFavorites = () => {
        const existingFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');

        if (Array.isArray(existingFavorites)) {
            const updatedFavorites = [...existingFavorites, singleBook];
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            alert('Book is added to bookmarks');
        } else {
            console.error('Error: Unable to retrieve existing favorite books from local storage');
        }
    };

    const handleScroll = () => {
        window.scrollTo({
            top: 650,
            left: 150,
            behavior: 'smooth',
        });
    }

    return (
        <section className="single_book-wrapper">
            <Link to="/">
                <FaArrowLeft />
            </Link>
            {singleBook && (<h1 className="single_book-title">{singleBook.title}</h1>)}
            <div className="book-details">
                <div className="single_book_img-wrapper">
                    <Button type="primary" icon={<HeartOutlined />} size="large" className="bookmark-btn" onClick={saveToFavorites} />
                    {singleBook && (<img src={singleBook.image} alt="#" className="single_book-img" />)}
                </div>
                <div className="book-main">
                    <div className="price-rating">
                        <span className="single_price">{singleBook?.price}</span>
                        <span className="single_rating">Book Rating: {singleBook?.rating}</span>
                    </div>
                    <Row className="single-row">
                        <Col className="gutter-row" span={6}>
                            <div className="row-title">Authors</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="row-data">{singleBook?.authors}</div>
                        </Col>
                    </Row>
                    <Row className="single-row" >
                        <Col className="gutter-row" span={6}>
                            <div className="row-title">Publisher</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="row-data" >{singleBook?.publisher}, {singleBook?.year}</div>
                        </Col>
                    </Row>
                    <Row className="single-row" >
                        <Col className="gutter-row" span={6}>
                            <div className="row-title">Language</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="row-data">{singleBook?.language}</div>
                        </Col>
                    </Row>
                    <Row className="single-row" >
                        <Col className="gutter-row" span={6}>
                            <div className="row-title">Format</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="row-data">Paper book / ebook (PDF)</div>
                        </Col>
                    </Row>
                    <button type="button" className="more_details-btn" onClick={handleScroll} >More details <RiArrowDownSLine /></button>
                    <button type="button" className="add_to_card-btn" onClick={addToCart}>ADD TO CART</button>
                    <a href={singleBook?.url} className="show-preview">Preview Book</a>
                </div>
            </div>
            <Tabs defaultActiveKey="1" items={tabs} onChange={onChange} />
            <div className="social-icons">
                <Link to="https://www.facebook.com/">
                    <SlSocialFacebook style={{ color: 'rgba(49, 48, 55, 1)' }} />
                </Link>
                <Link to="https://www.twitter.com/" style={{ color: 'rgba(49, 48, 55, 1)' }} >
                    <SlSocialTwitter />
                </Link>
                <BsThreeDots />
            </div>
            <div className="subscribe">
                <h3 className="footer-title">SUBSCRIBE TO NEWSLETTER</h3>
                <span className="footer-text">Be the first to know about new IT books, upcoming releases, exclusive offers and more.</span>
                <div className="footer-actions">
                    <input type="text" placeholder="Your email" className="footer-input"/>
                    <button type="button" className="footer-btn">SUBSCRIBE</button>
                </div>
            </div>
            <div className="similar-books">
                <h2 className="title-similar-books">SIMILAR BOOKS</h2>
                <Row className="similar-book_grid">
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className="similar-book_el">
                        {books && <BookCard {...books[7]} />}
                    </Col>
                    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} className="similar-book_el">
                        {books && <BookCard {...books[12]} />}
                    </Col>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className="similar-book_el">
                        {books && <BookCard {...books[18]} />}
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default SingleBookPage;
