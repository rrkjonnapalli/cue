const config = require('config');
const { Logger } = require('@lib/utils');
const { sequelize: definitions } = require('../definitions');

const log = Logger('SQLITE-MODELS');

const TIMESTAMP_IGNORE_MODELS = config.get('TIMESTAMP_IGNORE_MODELS');

const init = (connection) => {
  const models = {};
  for (const [model, { definition, options }] of Object.entries(definitions)) {
    log.trace('Registering sqlite model - %s', model);
    if (!TIMESTAMP_IGNORE_MODELS.includes(model)) {
      Object.assign(options, { timestamps: true, createdAt: 'created_at', updatedAt: 'updated_at' });
    }
    models[model] = connection.define(model, definition, options);
  }
  return models;
};
module.exports = init;
