import sequelize from "../config/connection.js";
import { DataTypes } from "sequelize";

const User = sequelize.define('user', {
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
    tableName: 'Usuarios',
    timestamps: false
});
  
  export default User