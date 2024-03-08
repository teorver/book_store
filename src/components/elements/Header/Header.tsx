import './Header.css';
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { useNavigate } from 'react-router-dom';

const { Search } = Input;

const Header = () => {
    const navigate = useNavigate();

    const onSearch: SearchProps['onSearch'] = ( async (value) => {
        const searchBooks = await fetch(`https://api.itbook.store/1.0/search/${value}`);
        const { books } = await searchBooks.json();

        console.log({ value, books });
        navigate('/search', {state: { value, books }});
        // return { value, books };
    });

    return (
        <section className="header-wrapper">
            <span className="header-span">BOOKSTORE</span>
            <Search placeholder="Search" allowClear onSearch={onSearch} className="search-input" />
            <div className="action-buttons">
                <CiHeart className="icon" />
                <PiShoppingCartDuotone className="icon" />
                <LuUser className="icon" />
            </div>
        </section>
    );
};

export default Header;
