import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";
import SeriesCard from "./SeriesCard";

const SeriesList = () => {
  const { getSeries, video } = useProducts();
  console.log(video);
  useEffect(() => {
    getSeries();
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={() => navigate("/adminSeries")}
      >
        <AddIcon />
      </IconButton>
      <div>
        {video ? (
          video.map((elem) => <SeriesCard elem={elem} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
};

export default SeriesList;
