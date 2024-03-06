import './Header.css';
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';

const { Search } = Input;
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const Header = () => {
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
