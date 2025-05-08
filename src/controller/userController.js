import sequelize from "../config/connection.js";
import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
  try {
    const allUsers = User.findAll();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json("erro ao listar usuarios, contate o responsável");
    console.error("erro", error);
  }
};
