import sequelize from "../config/connection.js";
import Service from "../models/serviceModel.js";

export const getService = async (req, res) => {
  try {
    const todosServicos = await Service.findAll();
    res.status(200).json(todosServicos);
  } catch (error) {
    res.status(500).json("erro ao buscar os serviços, contate o reponsável");
    console.error("erro ao buscar: ", error);
  }
};

export const createService = async (req, res) => {
  try {
    const newService = await Service.create(req.body);
    res.status(200).json(newService);
  } catch (error) {
    res.status(500).json("erro ao criar serviço");
    console.error("erro: ", error);
  }
};
