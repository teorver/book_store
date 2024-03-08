import { IBook } from '../../../utils/types.ts';
import { Col, Row } from "antd";
import BookCard from '../../elements/BookCard/BookCard';

const SearchResult = ({ searchTitle, foundBooks }: { searchTitle: string; foundBooks: IBook[] }) => {
    return (
        <section className="search_result-wrapper">
            <h1 className="page-title">{`'${searchTitle}' SEARCH RESULT`}</h1>
            <span>{`Found ${foundBooks.length} books`}</span>
            <div className="found-cards">
                <Row gutter={[16, 16]}>
                    {foundBooks.map((book) => (
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
