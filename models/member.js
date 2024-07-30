const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');


class Member extends Model {
    checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
}
}

Member.init(
    {

        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },


        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },

    pastor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'pastor',
        key: 'id'
      }
    }

    },

    {
    hooks: {
      beforeCreate: async (newMemberData) => {
        newMemberData.password = await bcrypt.hash(newMemberData.password, 10);
        return newMemberData;
      },
      beforeUpdate: async (updatedMemberData) => {
        updatedMemberData.password = await bcrypt.hash(updatedMemberData.password, 10);
        return updatedMemberData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'member',
  }

);

module.exports = Member;