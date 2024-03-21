import {useEffect, useState} from "react";
import {Col, Pagination, Row} from 'antd';
import BookCard from '../../components/BookCard/BookCard';
import getBooksInfo from '../../api/books';
import './Home.css';
import { totalPages } from "../../utils/helpers.ts";
import {useDispatch, useSelector} from "react-redux";
import { fetchBooksRequest, fetchBooksSuccess } from '../../store/slices/allBooks/allBooksSlice';
import {RootState} from "../../store/store.ts";
import {IBook} from "../../utils/types.ts";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const { books } = useSelector((state: RootState) => state.fullBookList);

    const fetchBooks = async () => {
        dispatch(fetchBooksRequest());
        const booksInfo = await getBooksInfo();
        dispatch(fetchBooksSuccess(booksInfo));
    }

    useEffect(() => {
        fetchBooks();
    }, [dispatch]);

    const itemsPerPage = 12;
    const totalItems = books ? books.length : 0;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedBooks: IBook[] = books ? books.slice(startIndex, endIndex) : [];

    const calculatedPages = totalPages(totalItems, itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <section>
            <h1 className="page-title">NEW RELEASES BOOKS</h1>
            <div className="cards-wrapper">
                <Row gutter={[16, 16]}>
                    {displayedBooks.map(book => (
                        <Col span={8} key={book.isbn13}>
                            <BookCard
                                title={book.title}
                                subtitle={book.subtitle}
                                price={book.price}
                                image={book.image}
                                isbn13={book.isbn13}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
            {calculatedPages > 1 && (
                <Pagination
                    current={currentPage}
                    onChange={handlePageChange}
                    total={totalItems}
                    pageSize={itemsPerPage}
                    showSizeChanger={false}
                    className="home-pagination"
                />
            )}
            <div className="subscribe">
                <h3 className="footer-title">SUBSCRIBE TO NEWSLETTER</h3>
                <span className="footer-text">Be the first to know about new IT books, upcoming releases, exclusive offers and more.</span>
                <div className="footer-actions">
                    <input type="text" placeholder="Your email" className="footer-input"/>
                    <button type="button" className="footer-btn">SUBSCRIBE</button>
                </div>
            </div>
        </section>
    );
};

export default Home;
