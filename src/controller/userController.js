import sequelize from "../config/connection.js";
import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json("erro ao listar usuarios, contate o responsável");
    console.error("erro", error);
  }
};

export const createUser = async (req, res) => {
  try {
    if (!req.body.nome) {
      res.send("o nome é necessario");
    }
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json("erro ao criar usuario");
    console.error("erro: ", error);
  }
};



