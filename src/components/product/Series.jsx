// import React, { useState } from "react";
// import { Button, Container, Typography, Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const Series = () => {
//   const navigete = useNavigate();
//   // Состояние для хранения списка серий
//   const [series, setSeries] = useState([]);

//   // Функция для добавления новой серии
//   const addSeries = () => {
//     setSeries([...series, series.length + 1]);
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Динамическое добавление серий
//       </Typography>
//       <Button variant="contained" color="primary" onClick={addSeries}>
//         Добавить серию
//       </Button>
//       <Box mt={2}>
//         {series.map((num) => (
//           <Button
//             key={num}
//             variant="outlined"
//             style={{ margin: "5px" }}
//             onClick={() => navigete("/seriesCard")}
//           >
//             Серия {num}
//           </Button>
//         ))}
//       </Box>
//     </Container>
//   );
// };

// export default Series;
