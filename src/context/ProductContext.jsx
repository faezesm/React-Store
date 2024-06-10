import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div>
      <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
    </div>
  );
};


// Custom Hook
const useProduct = () => {
  const products = useContext(ProductContext);
  return products;
};

export default ProductProvider;
export {useProduct}
