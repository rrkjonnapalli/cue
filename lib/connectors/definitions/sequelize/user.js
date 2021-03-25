const { DataTypes } = require('sequelize');

const definition = {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('ACTIVE', 'BLOCKED'),
    allowNull: false,
    defaultValue: 'ACTIVE'
  },
  fullname: {
    type: DataTypes.STRING,
    get() {
      return [this.firstname, this.lastname].join(' ');
    }
  }
};

const options = {
  tableName: 'users',
  modelName: 'User',
  indexes: [
    {
      unique: true,
      fields: ['email']
    }
  ]
};

module.exports = {
  definition,
  options
};
