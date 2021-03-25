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
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('OPEN', 'CLOSED'),
    allowNull: false,
    defaultValue: 'OPEN'
  }
};

const options = {
  tableName: 'tasks',
  modelName: 'Task',
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
