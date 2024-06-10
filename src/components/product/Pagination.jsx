import { Pagination, Stack, Typography } from "@mui/material";
import React from "react";

const PaginationControlled = ({ page, count, handleChange }) => {
  return (
    <div>
      <Stack spacing={2}>
        <Typography> Page: {page} </Typography>
        <Pagination count={count} size="large" onChange={handleChange} />
      </Stack>
    </div>
  );
};

export default PaginationControlled;
