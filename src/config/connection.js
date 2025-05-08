import { Sequelize } from "sequelize";
import dotenv from "dotenv";    
dotenv.config()


console.log("Variáveis carregadas:", {
    DATABASE: process.env.DATABASE,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    HOST: process.env.HOST,
    PORT: process.env.PORT
  });


const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: "mysql",
    port: process.env.PORT,
    logging: console.log

}
)


export default sequelize


