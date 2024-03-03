import './Header.css';
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import { PiMagnifyingGlass } from "react-icons/pi";

const Header = () => {
    return (
        <section className="header-wrapper">
            <span className="header-span">BOOKSTORE</span>
            <div className="search">
                <input type="search" className="search-input"/>
                <PiMagnifyingGlass />
            </div>
            <div className="action-buttons">
                <CiHeart />
                <PiShoppingCartDuotone />
                <LuUser />
            </div>
        </section>
    );
};

export default Header;
