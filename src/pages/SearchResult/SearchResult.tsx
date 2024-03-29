import { Col, Row } from 'antd';
import BookCard from '../../components/BookCard/BookCard';
import { IBook } from '../../utils/types';
import './SearchResult.css';
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";


const SearchResult = () => {
    const { value, books } = useSelector((state: RootState) => state.search);

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
                                isbn13={book.isbn13}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default SearchResult;
