const { DataTypes } = require('sequelize');

const definition = {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

const options = {
  tableName: 'counters',
  modelName: 'Counter',
  indexes: [
    {
      unique: true,
      fields: ['name']
    }
  ]
};

module.exports = {
  definition,
  options
};
