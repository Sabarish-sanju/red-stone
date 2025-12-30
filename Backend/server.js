const connectDB = require("./config/db.js");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes.js");
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
app.use("/", userRoutes);
app.listen(process.env.PORT, () => {
  console.log("server is running on port", process.env.PORT);
});
