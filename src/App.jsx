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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DataProvider from "./dataFetch/data";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <div className="flex flex-col min-h-screen">
          <div className="flex-1">
            <Navbar />
            <Breadcrumbs />
            <Routes>
              <Route path="*" element={<Navigate to="/404" replace />} />
              <Route path="/404" element={<NotFound />} />

              <Route path="/" element={<Main />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/all-products" element={<AllProducts />} />
              <Route path="/all-sales" element={<AllSales />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </DataProvider>
    </QueryClientProvider>
  );
}

export default App;
