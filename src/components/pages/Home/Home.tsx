import { useEffect, useState } from "react";
import { Row, Col, Pagination } from 'antd';
import BookCard from '../../elements/BookCard/BookCard';
import getBooksInfo from '../../../api/books';
import { IBook } from '../../../utils/types';
import './Home.css';

const Home = () => {
    const [books, setBooks] = useState<IBook[] | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    useEffect(() => {
        getBooksInfo().then(response => setBooks(response));
    }, []);

    const totalItems = books ? books.length : 0;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedBooks = books ? books.slice(startIndex, endIndex) : [];

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
                            />
                        </Col>
                    ))}
                </Row>
            </div>
            {totalPages > 1 && (
                <Pagination
                    current={currentPage}
                    onChange={handlePageChange}
                    total={totalItems}
                    pageSize={itemsPerPage}
                    showSizeChanger={false}
                    className="home-pagination"
                />
            )}
        </section>
    );
};

export default Home;
