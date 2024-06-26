import React from "react";
import { useCart } from "../context/CartContext";
import BascketCard from "../components/BascketCard";
import BascketSidebar from "../components/BascketSidebar";

import styles from './CheckoutPage.module.css'

const CheckoutPage = () => {
  const [state, dispatch] = useCart();
  if (!state.itemsCounter) {
    return <div className={styles.container}>Empty</div>;
  }

  const clickHandler = (type, data) => {
    dispatch({ type, payload: data });
  };
  return (
    <div className={styles.container}>
        <BascketSidebar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BascketCard key={product.id} data={product} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
