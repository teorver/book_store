import './SingleBookPage.css';
import {FaArrowLeft} from "react-icons/fa6";
import {SlSocialFacebook, SlSocialTwitter} from "react-icons/sl";
import {BsThreeDots} from "react-icons/bs";
import {RiArrowDownSLine} from "react-icons/ri";
import type {TabsProps} from 'antd';
import {Button, Col, Row, Tabs} from 'antd';
import {HeartOutlined} from '@ant-design/icons';

import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import isbnSelector from "../../../store/slices/book/book.selector.ts";
import {useEffect, useState} from "react";
import {IBook, IOpenedBook} from "../../../utils/types.ts";
import BookCard from "../../elements/BookCard/BookCard.tsx";
import getBooksInfo from "../../../api/books.ts";

const SingleBookPage = () => {
    const bookISBN = useSelector(isbnSelector);
    const [books, setBooks] = useState<IBook[] | null>(null);
    const[singleBook, setBook] = useState<IOpenedBook | null>(null);

    const getSingleBook = async () => {
        const bookDetails = await fetch(`https://api.itbook.store/1.0/books/${bookISBN.isbn13}`, {});
        const response: IOpenedBook = await bookDetails.json();

        setBook(response);
    }

    useEffect(() => {
        getSingleBook();
    }, [bookISBN]);

    useEffect(() => {
        getBooksInfo().then(response => setBooks(response));
    }, []);

    console.log(books);

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
        const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const isBookInCart = existingCart
            .some((cartItem: IOpenedBook) => cartItem.isbn13 === singleBook?.isbn13);

        if (!isBookInCart && singleBook) {
            const updatedCart = [...existingCart, singleBook];
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
                        <span className="single_rating">{singleBook?.rating}</span>
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
                    <button type="button" className="more_details-btn">More details <RiArrowDownSLine /></button>
                    <button type="button" className="add_to_card-btn" onClick={addToCart}>ADD TO CART</button>
                    <a href={singleBook?.url} className="show-preview">Preview Book</a>
                </div>
            </div>
            <Tabs defaultActiveKey="1" items={tabs} onChange={onChange} />
            <div className="social-icons">
                <SlSocialFacebook />
                <SlSocialTwitter />
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
                <h2>SIMILAR BOOKS</h2>
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
