import { Sequelize } from "sequelize";
import dotenv from "dotenv";    
dotenv.config()


const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: "mysql",
    port: process.env.PORT,
    logging: console.log

}
)


export default sequelize


