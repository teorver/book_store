import { Col, Row } from 'antd';
import BookCard from '../../elements/BookCard/BookCard';
import { IBook } from '../../../utils/types';
import { useLocation } from 'react-router-dom';
import './SearchResult.css';

const SearchResult = () => {
    const { state } = useLocation();
    const { value, books } = state || { value: '', books: [] };

    return (
        <section className="search_result-wrapper">
            <h1 className="page-title">'{value.toUpperCase()}' SEARCH RESULT</h1>
            <span className="page-subtitle">Found {books.length} books</span>
            <div className="found-cards">
                <Row gutter={[16, 16]}>
                    {books.map((book: IBook) => (
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
        </section>
    );
};

export default SearchResult;
