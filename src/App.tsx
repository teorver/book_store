import { Route, Routes } from 'react-router-dom';

import Header from './components/elements/Header/Header';
import Home from './components/pages/Home/Home';
import Footer from './components/elements/Footer/Footer';
import SearchResult from './components/pages/SearchResult/SearchResult';
import SingleBookPage from './components/pages/SingleBook/SingleBookPage';
import Cart from './components/pages/Cart/Cart';
import Favorites from "./components/pages/Favorites/Favorites.tsx";

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
