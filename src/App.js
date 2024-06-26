import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '~/pages/Home'
import Login from '~/pages/Login'
import Search from './pages/SearchPage';
import SignUp from './pages/SignUp'
import Product from './pages/Product';
import Cart from './pages/Cart';
import MyAccount from './pages/MyAccount';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
