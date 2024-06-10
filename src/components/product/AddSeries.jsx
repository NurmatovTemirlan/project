import { Container } from "@mui/material";
import React from "react";
import FormSeries from "../form/FormSeries";

const AddSeries = () => {
  return (
    <div>
      <Container>
        <FormSeries isEdit={false} />
      </Container>
    </div>
  );
};

export default AddSeries;
