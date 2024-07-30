const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Pastor extends Model {}

Pastor.init(
    {

        id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false

    },

    church: {
      type: DataTypes.STRING,
      allowNull: false
    }
    },

    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pastor',
  }

);

module.exports = Pastor;
