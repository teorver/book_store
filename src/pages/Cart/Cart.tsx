import './Cart.css';
import {FaArrowLeft} from "react-icons/fa6";
import {Link} from "react-router-dom";
import {
    getLocalStorageCart,
    handleBookQty,
    handleLocalStorage,
    handleTotalSum,
    handleVATValue,
    sumBooksPrice,
    vat
} from '../../utils/helpers';
import {Col, Input, Row} from "antd";
import {TiDeleteOutline} from "react-icons/ti";
import {useEffect, useState} from "react";
import { IOpenedBook } from '../../utils/types';

const Cart = () => {
    const [currentQty, setQty] = useState<number>(1);
    const [cartItems, setCartItems] = useState<IOpenedBook[] | []>([]);

    useEffect(() => {
        setCartItems(getLocalStorageCart);
        sumBooksPrice(currentQty);
    }, []);

    const deleteBook = (index: number) => {
        const updatedCart: IOpenedBook[] = [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
        handleLocalStorage(updatedCart);
        window.location.reload();
    };

    return(
        <section className="search_wrapper">
            <Link to="/">
                <FaArrowLeft/>
            </Link>
            <h1 className="cart-title">YOUR CART</h1>
            {cartItems.map((item, index) => (
                <div key={index} className="card_list">
                    <div className="cart-img-wrapper">
                        <img src={item.image} alt="#" className="cart-book_img" />
                    </div>
                    <div className="cart_book-info">
                        <span className="cart_item-title">{item.title}</span>
                        <span className="cart_item-subtitle">by {item.authors}, {item.publisher}</span>
                        <div className="change_qty">
                            <button
                                type="button"
                                className="qty-btn"
                                onClick={() => handleBookQty(currentQty, 'decrease', currentQty, setQty)}
                            >-</button>
                            <Input defaultValue={currentQty} value={currentQty} className="qty_value" style={{ padding: '0', display: 'flex', textAlign: 'center' }} />
                            <button
                                type="button"
                                className="qty-btn"
                                onClick={() => handleBookQty(currentQty, 'increase', currentQty, setQty)}
                            >+</button>
                        </div>
                    </div>
                    <div className="book_price-cart">${sumBooksPrice(currentQty)}</div>
                    <button
                        type="button"
                        className="delete_from_cart"
                        onClick={() => deleteBook(index)}
                    ><TiDeleteOutline className="delete-btn-modifier" /></button>
                </div>
            ))}
            <div className="price_count">
                <Row className="single-row">
                    <Col className="gutter-row" span={6}>
                        <div className="cart-row-title">Sum total</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="cart-row-data">$ {sumBooksPrice(currentQty)}</div>
                    </Col>
                </Row>
                <Row className="single-row vat-row">
                    <Col className="gutter-row" span={6}>
                        <div className="cart-row-title">VAT</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="cart-row-data">$ {handleVATValue(vat, sumBooksPrice(currentQty))}</div>
                    </Col>
                </Row>
                <Row className="single-row">
                    <Col className="gutter-row" span={6}>
                        <div className="cart-row-title">TOTAL:</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="cart-row-data">$ {handleTotalSum(vat, sumBooksPrice(currentQty))}</div>
                    </Col>
                </Row>
                <button type="button"
                        className="check_out-btn"
                        onClick={() => alert("Purchase done!")}
                >CHECK OUT</button>
            </div>
        </section>
    );
};

export default Cart;
