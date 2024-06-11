import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";



import { useProduct } from "../context/ProductContext";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { filterProducts, getInitialQuery, searchProducts } from "../helper/helper";

import styles from "./ProductPage.module.css";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";

const ProductsPage = () => {
  const products = useProduct();

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  // this is first loader
  useEffect(() => {
    setDisplayed(products);

    setQuery(getInitialQuery(searchParams))
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "")
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);




  return (
    <>
      <div>
        <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      </div>
      <div className={styles.container}>
        {!displayed.length && <Loader />}
        <div className={styles.products}>
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <Sidebar query={query} setQuery={setQuery} />
      </div>
    </>
  );
};

export default ProductsPage;
