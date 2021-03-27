const SQLiteBaseModel = require('./base');

const init = (SQLiteModels) => {
  const models = {};
  for (const [modelName, model] of Object.entries(SQLiteModels)) {
    models[modelName] = new SQLiteBaseModel({
      modelName,
      model,
      models: SQLiteModels
    });
  }
  return models;
};
module.exports = init;
