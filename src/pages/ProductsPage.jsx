import React from "react";
import { useProduct } from "../context/ProductContext";
import styles from './ProductPage.module.css'

const ProductsPage = () => {
  const products = useProduct();
  return (
    <div className={styles.container}>
      {!products.length && <p>Loading...</p> }
      <div className={styles.products}>{products.map(product => <p key={product.id}>{product.title}</p>)}</div>
      <div>sidebar</div>
    </div>
  );
};

export default ProductsPage;
