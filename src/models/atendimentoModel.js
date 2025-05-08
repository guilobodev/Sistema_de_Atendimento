import sequelize from "../config/connection.js";
import { DataTypes } from "sequelize";

const Atendimento = sequelize.define(
  "atendimento",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },

  {
    tableName: "Atendimentos",
    timestamps: false,
  }
);

export default Atendimento;
