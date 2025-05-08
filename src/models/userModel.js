import sequelize from "../config/connection";

const User = sequelize.define('User', {
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
    tableName: 'User',
    timestamps: false
});
  
  export default Service