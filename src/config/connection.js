import { Sequelize } from "sequelize";

const sequelize = new Sequelize('banco', 'root', 'previ@123', {
    host: '172.23.41.3',
    port: 3306,
    dialect: 'mysql'
})


export default sequelize


