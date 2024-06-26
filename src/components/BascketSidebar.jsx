import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";

import styles from './BascketSidebar.module.css'

const BascketSidebar = ({ state, clickHandler }) => {
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total:</p>
        <span>{state.totalPrice}</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.itemsCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status:</p>
        <span>{!state.checkOut && <p>Pending...</p>}</span>
      </div>
      <button onClick={()=> clickHandler("CHECKOUT")}>CheckOut</button>
    </div>
  );
};

export default BascketSidebar;
