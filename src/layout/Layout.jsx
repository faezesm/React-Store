
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

import styles from './Layout.module.css'

const Layout = ({ children }) => {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">BotoShop</Link>
        <div>
        <Link to="/checkout">
          <PiShoppingCartSimpleBold />
          {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
        </Link>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By Ms Faeze with Love</p>
      </footer>
    </>
  );
};

export default Layout;
