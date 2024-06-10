import React from "react";
import FormSeries from "../form/FormSeries";
import { Container } from "@mui/material";

const EditSeries = () => {
  return (
    <div>
      <Container>
        <FormSeries isEdit={true} />
      </Container>
    </div>
  );
};

export default EditSeries;
