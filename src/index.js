import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import sequelize from "./config/connection.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("funcionando");
});

async function startServer(params) {
  try {
    await sequelize.authenticate();


    await sequelize.sync();

    app.listen(port, function () {
      console.log(`porta rodando na ${port}`);
    });
  } catch (error) {
        console.error('Não foi possível se conectar ao banco de dados',  error)
  }
}


startServer()