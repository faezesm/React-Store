import { useParams } from "react-router-dom";
import { useProductDetails } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import Loader from "../components/Loader";

import styles from './ProductDetailPage.module.css'

const ProductDetailPage = () => {
  const { id } = useParams();

  const productDetails = useProductDetails(+id);

  if (!productDetails) return <Loader />;
  return (
    <div className={styles.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p className={styles.description}>{productDetails.description}</p>
        <p className={styles.category}>
          <SiOpenproject /> {productDetails.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag /> {productDetails.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Go ToShop</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
