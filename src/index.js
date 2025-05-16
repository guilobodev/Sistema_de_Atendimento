import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import "./associations/associations.js"

import sequelize from "./config/connection.js";

import "./models/serviceModel.js";
import router from "./routers/indexRouter.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const port = 3000;

app.get("/", (req, res) => {
  res.send("API rodando!");
});

async function startServer(params) {
  try {
    await sequelize.authenticate();

    await sequelize.sync();

    app.listen(port, function () {
      console.log(`porta rodando na ${port}`);
    });
  } catch (error) {
    console.error("Não foi possível se conectar ao banco de dados", error);
  }
}

startServer()