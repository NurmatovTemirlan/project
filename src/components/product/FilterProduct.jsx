import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useProducts } from "../context/ProductContextProvider";

const FilterProduct = () => {
  const { fetchByParams } = useProducts();
  return (
    <div>
      <Paper>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => fetchByParams("category", e.target.value)}
          >
            <FormControlLabel
              value="anime"
              control={<Radio />}
              label="Аниме"
              color="inherit"
            />
            <FormControlLabel
              value="movie"
              control={<Radio />}
              label="Фильмы"
              color="inherit"
            />
            <FormControlLabel
              value="cartoon"
              control={<Radio />}
              label="Мультфильмы"
              color="inherit"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </div>
  );
};

export default FilterProduct;
