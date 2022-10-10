import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";

dotenv.config();
connectDatabase();
const app = express();

//API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Api is running...")
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on ${PORT} port`));