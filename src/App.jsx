import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Categories from "./pages/categories";
import AllProducts from "./pages/allProducts";
import AllSales from "./pages/allSales";
import Cart from "./pages/cart";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/all-sales" element={<AllSales />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
