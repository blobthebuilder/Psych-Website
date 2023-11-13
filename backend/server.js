require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const dataRoutes = require("./routes/data");
const Data = require("./dataModel");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/data", dataRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
