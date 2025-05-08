import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";



const Service = sequelize.define('service', {
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
    tableName: 'Service',
    timestamps: false
  }
);
  

export default Service