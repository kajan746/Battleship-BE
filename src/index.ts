import express from "express";
import mongoose from "mongoose";
import router from "./routes/leadBoardRoutes";
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", router);

const PORT = process.env.PORT || 3001;

mongoose
  .connect("mongodb://localhost:27017/battleship", {})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error.message));
