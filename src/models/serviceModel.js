import sequelize from "../config/connection";



const Service = sequelize.define('Service', {
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