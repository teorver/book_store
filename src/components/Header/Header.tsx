import './Header.css';
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import { Input } from 'antd';

import { useNavigate } from 'react-router-dom';
import { setSearchResult } from '../../store/actions.ts';
import { useAppDispatch } from '../../store/store.ts';
import {getSearchResult} from "../../api/books.ts";

const { Search } = Input;

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSearch = async (value: string) => {
        const { books } = await getSearchResult(value);
        dispatch(setSearchResult({ value, books }));
        navigate('/search');
    };

    const onCart = () => {
        navigate('/your-cart');
        window.location.reload();
    };

    const onFavorites = () => {
        navigate('/favorites');
    }

    const onUserAvatar = () => {
        navigate('/sign-in');
    }

    return (
        <section className="header-wrapper">
            <span className="header-span">BOOKSTORE</span>
            <Search placeholder="Search" allowClear onSearch={onSearch} className="search-input" />
            <div className="action-buttons">
                <CiHeart className="icon" onClick={onFavorites} />
                <PiShoppingCartDuotone className="icon" onClick={onCart} />
                <LuUser className="icon" onClick={onUserAvatar} />
            </div>
        </section>
    );
};

export default Header;
