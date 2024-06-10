import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";

import { shortenText } from "../helper/helper";
import styles from "./Card.module.css";

const Card = ({ data }) => {
  const { id, title, images, price } = data;

  console.log(data);
  return (
    <div className={styles.card}>
      <img src={images} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          <button>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
