import sequelize from "../config/connection.js";
import Canal from "../models/canalModel.js";

export const getCanal = async (req, res) => {
  try {
    const todosCanais = await Canal.findAll();
    res.status(200).json(todosCanais);
  } catch (error) {
    res.status(500).json("erro ao buscar os canais, contate o responsável");
    console.error("erro ao buscar: ", error);
  }
};

export const createCanal = async (req, res) => {
  try {
    const newCanal = await Canal.create(req.body);
    res.status(200).json(newCanal);
  } catch (error) {
    res.status(500).json("erro ao criar o canal");
    console.error("erro: ", error);
  }
};
