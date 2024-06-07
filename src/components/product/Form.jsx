import { Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";

const init = {
  title: "",
  genere: "",
  age: "",
  tema: "",
  image: "",
};

const Form = ({ isEdit }) => {
  const { createProduct, editProduct } = useProducts();

  const [product, setProduct] = useState(init);

  function handleInp(e) {
    if (e.target.name === "age") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  }

  function addProduct() {
    createProduct(product);
    setProduct(init);
  }

  return (
    <FormControl
      sx={{ gap: "20px", width: "100", margin: "50px auto" }}
      color="success"
    >
      <TextField
        placeholder="Название Аниме"
        variant="outlined"
        name="title"
        fullWidth
        onChange={handleInp}
        value={product.title}
      />
      <TextField
        placeholder="Жанры"
        variant="outlined"
        name="genere"
        fullWidth
        onChange={handleInp}
        value={product.genere}
      />
      <TextField
        placeholder="Возрсатной рейтинг:"
        variant="outlined"
        name="age"
        fullWidth
        onChange={handleInp}
        value={product.age}
      />
      <TextField
        placeholder="Тема"
        variant="outlined"
        name="tema"
        fullWidth
        onChange={handleInp}
        value={product.tema}
      />
      <TextField
        placeholder="Icon"
        variant="outlined"
        name="image"
        fullWidth
        onChange={handleInp}
        value={product.image}
      />

      {isEdit ? (
        <Button
          sx={{ bgcolor: "black", color: "white" }}
          variant="outlined"
          fullWidth
          size="large"
        >
          Сохранить
        </Button>
      ) : (
        <Button
          sx={{ bgcolor: "black", color: "white" }}
          variant="outlined"
          fullWidth
          size="large"
          onClick={addProduct}
        >
          Добавить
        </Button>
      )}
    </FormControl>
  );
};

export default Form;
