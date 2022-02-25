import {Sequelize} from "sequelize";

export default new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        timezone: "00:00",
        define: {
            freezeTableName: true,
            timestamps: false,
            underscored: true
        }
    },
)