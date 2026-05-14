import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";

import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";



function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
