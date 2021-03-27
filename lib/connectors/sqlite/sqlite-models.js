const config = require('config');
const { Logger } = require('@lib/utils');
const { sequelize: definitions } = require('../definitions');
const modelInitiators = require('./models');

const log = Logger('SQLITE-MODELS');

const TIMESTAMP_IGNORE_MODELS = config.get('TIMESTAMP_IGNORE_MODELS');

const init = (connection) => {
  const models = {};
  for (const [modelName, { definition, options }] of Object.entries(definitions)) {
    log.trace('Registering sqlite model - %s', modelName);
    if (!TIMESTAMP_IGNORE_MODELS.includes(modelName)) {
      Object.assign(options, { timestamps: true, createdAt: 'created_at', updatedAt: 'updated_at' });
    }
    const initiateModel = modelInitiators[modelName];
    if (initiateModel) {
      models[modelName] = initiateModel(connection);
    } else {
      models[modelName] = connection.define(modelName, definition, options);
    }
  }
  return models;
};
module.exports = init;
