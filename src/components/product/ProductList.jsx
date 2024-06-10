import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import ProductCard from "./ProductCard";
import { Box, Pagination } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import PaginationControlled from "./Pagination";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  // const [paginateParams, setPaginateParams] = useSearchParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, []);

  const itemPerPage = 6;
  const count = Math.ceil(products.length / itemPerPage);
  const currentData = () => {
    const begin = (page - 1) * itemPerPage;
    const end = begin + itemPerPage;
    return products.slice(begin, end);
  };
  const handleChange = (e, value) => {
    setPage(value);
  };
  console.log(currentData());
  console.log(count);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        {currentData().map((elem) => (
          <ProductCard key={elem.id} elem={elem} />
        ))}
      </Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <PaginationControlled
          page={page}
          count={count}
          handleChange={handleChange}
        />
      </Box>
    </Box>
  );
};
export default ProductList;
