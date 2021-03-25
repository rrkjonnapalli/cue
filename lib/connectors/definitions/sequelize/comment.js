const { DataTypes } = require('sequelize');

const definition = {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  entity_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  parent_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  entity_type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  }
};

const options = {
  tableName: 'comments',
  modelName: 'Comment',
  indexes: [
    {
      unique: true,
      fields: ['entity_type', 'entity_id', 'id']
    }
  ]
};

module.exports = {
  definition,
  options
};
