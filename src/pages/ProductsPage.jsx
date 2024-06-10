import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaListUl } from "react-icons/fa";
import { ImSearch } from "react-icons/im";

import { useProduct } from "../context/ProductContext";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { filterProducts, searchProducts } from "../helper/helper";

import styles from "./ProductPage.module.css";

const ProductsPage = () => {
  const products = useProduct();

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    setSearchParams(query)
    let finalProducts = searchProducts(products, query.search)
    finalProducts = filterProducts(finalProducts, query.category)
    setDisplayed(finalProducts)
  },[query])

  const serachHandler = () => {
    setQuery((query) => ({ ...query, search: search }));
  };

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
    setQuery((query) => ({ ...query, category }));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={serachHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        {!displayed.length && <Loader />}
        <div className={styles.products}>
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Jewelery</li>
            <li>Electronics</li>
            <li>Men's clothing</li>
            <li>Women's clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
