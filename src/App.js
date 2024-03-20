import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '~/pages/Home'
import Login from '~/pages/Login'
import Search from './pages/SearchPage';
import SignUp from './pages/SignUp'
import Product from './pages/Product';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
