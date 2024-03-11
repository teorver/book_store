import './Favorites.css';
import {FaArrowLeft} from "react-icons/fa6";
import {Link} from "react-router-dom";

const Favorites = () => {

    return (
        <section className="favorites-wrapper">
            <Link to="/">
                <FaArrowLeft/>
            </Link>
            <h1 className="fav-title">FAVORITES</h1>
        </section>
    );
};

export default Favorites;
