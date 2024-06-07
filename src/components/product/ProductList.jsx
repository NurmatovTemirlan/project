import React, { useEffect } from "react";
import { useProducts } from "../context/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {products ? (
        products.map((elem) => <ProductCard elem={elem} />)
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
export default ProductList;
