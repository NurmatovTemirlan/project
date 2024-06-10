import {
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";

const itin = {
  title: "",
  series: "",
  date: "",
  videoUrl: "",
};

const FormSeries = ({ isEdit }) => {
  const { createSeries } = useProducts();
  const [video, setVideo] = useState(itin);

  function handleInput(e) {
    let obj = {
      ...video,
      [e.target.name]:
        e.target.name === "series" ? Number(e.target.value) : e.target.value,
    };
    setVideo(obj);
  }

  function addVideo() {
    createSeries(video);
    setVideo(itin);
  }

  return (
    <div>
      <FormControl
        sx={{ gap: "20px", width: "100%", margin: "50 auto" }}
        color="success"
      >
        <TextField
          placeholder="Название серии"
          variant="outlined"
          name="title"
          fullWidth
          onChange={handleInput}
          value={video.title}
        />
        <TextField
          placeholder="Серия"
          variant="outlined"
          name="series"
          fullWidth
          onChange={handleInput}
          value={video.series}
        />
        <TextField
          placeholder="Дата выхода"
          variant="outlined"
          name="date"
          fullWidth
          onChange={handleInput}
          value={video.date}
        />
        <TextField
          placeholder="URL видео"
          variant="outlined"
          name="videoUrl"
          fullWidth
          onChange={handleInput}
          value={video.videoUrl}
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
            onClick={addVideo}
            navi
          >
            Добавить
          </Button>
        )}
      </FormControl>
      {video.videoUrl && (
        <Card sx={{ maxWidth: 600, margin: "20px auto" }}>
          <CardMedia
            component="video"
            src={video.videoUrl}
            title={video.title}
            controls
          />
        </Card>
      )}
    </div>
  );
};

export default FormSeries;
