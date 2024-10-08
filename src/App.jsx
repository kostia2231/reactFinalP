import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./pages/main";
import Categories from "./pages/categories";
import AllProducts from "./pages/allProducts";
import AllSales from "./pages/allSales";
import Cart from "./pages/cart";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import NotFound from "./pages/notFound";
import ProductPage from "./pages/productPage";
import CategoryPage from "./pages/categoryPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <Navbar />
          <Breadcrumbs />
          <Routes>
            <Route path="*" element={<Navigate to="/404" replace />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/" element={<Main />} />
            <Route path="/categories" element={<Categories />} />
            <Route
              path="/categories/:categoryTitle"
              element={<CategoryPage />}
            />
            <Route
              path="/categories/:categoryTitle/:productTitle"
              element={<ProductPage />}
            />
            <Route path="/all-products" element={<AllProducts />} />
            <Route
              path="/all-products/:productTitle"
              element={<ProductPage />}
            />
            <Route path="/all-sales" element={<AllSales />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
