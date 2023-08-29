import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart'
import Succses from './pages/Success'
import {
  createBrowserRouter,
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";



function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route ex act path="/products/:category" element={<ProductList />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />


        <Route exact path="/success" element={<Succses />} />
      </Routes>
    </Router>
  );
}

export default App;
