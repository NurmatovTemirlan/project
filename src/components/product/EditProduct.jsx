import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";
import Form from "../form/Form";

const EditProduct = () => {
  const { getOneProduct } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  return (
    <Container>
      <Form isEdit={true} />
    </Container>
  );
};

export default EditProduct;
