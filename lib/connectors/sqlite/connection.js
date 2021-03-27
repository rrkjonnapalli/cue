const { Sequelize } = require('sequelize');
const sqliteModelInitiator = require('./sqlite-models');
const modelInitiator = require('./models');
const { Connection } = require('../definitions/base');

class SQLiteConnection extends Connection {
  constructor(name, options) {
    super(name);
    this.options = {
      dialect: 'sqlite',
      ...options
    };
    this.models = {};
  }

  async init() {
    const sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: './database.sqlite'
    });
    this.connection = sequelize;
  }

  async initializeModels() {
    this.models = sqliteModelInitiator(this.connection);
    this.generics.models = modelInitiator(this.models);
  }
}

module.exports = SQLiteConnection;
