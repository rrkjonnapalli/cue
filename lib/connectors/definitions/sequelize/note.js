const { DataTypes } = require('sequelize');

const definition = {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  }
};

const options = {
  tableName: 'notes',
  modelName: 'Note',
  indexes: [
    {
      unique: true,
      fields: ['author', 'id']
    }
  ]
};

module.exports = {
  definition,
  options
};
