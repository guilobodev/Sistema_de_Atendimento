import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import "./src/associations/associations.js";

import sequelize from "./src/config/connection.js";

import "./src/models/serviceModel.js";
import router from "./src/routers/indexRouter.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const port = 4500;

app.get("/", (req, res) => {
  res.send("API rodando!");
});

async function startServer(params) {
  try {
    await sequelize.authenticate();

    app.listen(port, "0.0.0.0", function () {
      console.log(`porta rodando na ${port}`);
    });
  } catch (error) {
    console.error("Não foi possível se conectar ao banco de dados", error);
  }
}

startServer();
