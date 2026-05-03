const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Share = sequelize.define("Share", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fileId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  shareToken: {
    type: DataTypes.STRING,
    unique: true,
  },
});

module.exports = Share;