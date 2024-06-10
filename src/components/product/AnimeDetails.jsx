import React, { useEffect } from "react";
import SeriesList from "./SeriesList";
import { useProducts } from "../context/ProductContextProvider";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const AnimeDetails = () => {
  const { oneProduct, getOneProduct } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  return <div>{oneProduct ? <SeriesList /> : <h1>Loading</h1>}</div>;
};

export default AnimeDetails;
