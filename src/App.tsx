import { Route, Routes } from 'react-router-dom';

import Header from './components/elements/Header/Header';
import Home from './components/pages/Home/Home';
import Footer from './components/elements/Footer/Footer';
import SearchResult from './components/pages/SearchResult/SearchResult';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route path="/"
                 element={<Home />}
          />
          <Route path="/search" element={<SearchResult />} />
      </Routes>
      <Footer />
    </div>
  );
}
