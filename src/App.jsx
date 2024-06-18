import { Routes, Route, Navigate } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/404";
import ProductProvider from "./context/ProductContext";
import CartProvider from "./context/CartContext";

function App() {
  

  return (
    <CartProvider>
      <ProductProvider>
        <Routes>
          <Route index element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </ProductProvider>
    </CartProvider>
  );
}

export default App
