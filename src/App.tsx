import { Route, Routes} from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import SearchResult from './pages/SearchResult/SearchResult';
import SingleBookPage from './pages/SingleBook/SingleBookPage';
import Cart from './pages/Cart/Cart';
import Favorites from "./pages/Favorites/Favorites.tsx";

export default function App() {
  return (
    <div>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/books/:bookId" element={<SingleBookPage />} />
            <Route path="/your-cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
      <Footer />
    </div>
  );
}
