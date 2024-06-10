import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import { CardMedia } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SeriesCard({ elem }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (!elem) {
    return null;
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="video"
        controls
        src={elem.videoUrl}
        alt={elem.title}
      />
    </Card>
  );
}
