import sequelize from "../config/connection.js";
import { DataTypes } from "sequelize";

const Canal = sequelize.define('canal', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING
    },
  },
{
    tableName: 'Canal',
    timestamps: false
});
  
  export default Canal