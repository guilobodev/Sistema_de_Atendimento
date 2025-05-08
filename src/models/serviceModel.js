import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const service = sequelize.define(
  "service",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Servicos",
    timestamps: false,
  }
);
export default service;
