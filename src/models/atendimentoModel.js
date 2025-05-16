import sequelize from "../config/connection.js";
import { DataTypes } from "sequelize";


import Canal from "./canalModel.js";
import Service from "./serviceModel.js";
import User from "./userModel.js"

const Atendimento = sequelize.define(
  "atendimento",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    canalId : {
      type: DataTypes.INTEGER,
      references: {
        model: "Canal",
        key: "id"
      }

    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Usuarios",
        key: "id"
      }
    },
    serviceId : {
      type: DataTypes.INTEGER,
      references: {
        model: "Service",
        key: "id"
      }
    }
  },

  {
    tableName: "Atendimentos",
    timestamps: false,
  }
);

export default Atendimento;
