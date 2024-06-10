import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";

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

export default function ProductCard({ elem }) {
  const [expanded, setExpanded] = React.useState(false);
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();

  const MAX_TITLE_LENGTH = 20;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const truncatedTitle =
    elem.title.length > MAX_TITLE_LENGTH
      ? `${elem.title.slice(0, MAX_TITLE_LENGTH)}...`
      : elem.title;

  return (
    <Card
      className="title"
      sx={{
        maxWidth: 300,
        margin: "20px",
        borderRadius: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardHeader
        title={truncatedTitle}
        subheader={elem.genere}
        sx={{ textAlign: "center", fontSize: "1rem" }}
      />
      <CardMedia
        component="img"
        height="120"
        image={elem.image}
        alt={elem.title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ padding: "8px" }}>
        <Typography variant="body2" color="textSecondary" component="p">
          {elem.description}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {elem.age}+
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ justifyContent: "space-between", padding: "8px" }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{ fontSize: "0.7rem", padding: "4px 8px" }}
          onClick={() => navigate(`/details`)}
        >
          Смотреть
        </Button>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          sx={{ fontSize: "0.7rem", padding: "4px 8px" }}
          onClick={() => navigate(`/edit/${elem.id}`)}
        >
          Изменить
        </Button>
        <Button
          variant="contained"
          size="small"
          color="error"
          sx={{ fontSize: "0.7rem", padding: "4px 8px" }}
          onClick={() => deleteProduct(elem.id)}
        >
          Удалить
        </Button>
        <IconButton aria-label="add to favorites" sx={{ padding: "4px" }}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
