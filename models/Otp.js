import sequelize from '../db.js'
import {DataTypes} from 'sequelize';

export const Otp = sequelize.define('otp', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    otp: {type: DataTypes.STRING, allowNull: false},
    expires: {type: DataTypes.DATE, allowNull: false}
})