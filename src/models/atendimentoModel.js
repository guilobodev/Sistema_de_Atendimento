import sequelize from "../config/connection";

const Canal = sequelize.define('Canal', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
},

{
    tableName: 'Model',
    timestamps: false
});
  
  export default Service