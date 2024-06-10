import React from "react";
import { useProduct } from "../context/ProductContext";
import styles from './ProductPage.module.css'
import Card from "../components/Card";

const ProductsPage = () => {
  const products = useProduct();
  return (
    <div className={styles.container}>
      {!products.length && <p>Loading...</p> }
      <div className={styles.products}>{products.map(product => <Card key={product.id} data = { product } />)}</div>
      <div>sidebar</div>
    </div>
  );
};

export default ProductsPage;
