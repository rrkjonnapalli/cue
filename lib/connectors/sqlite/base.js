const { BaseModel } = require('../definitions/base');

class SQLiteBaseModel extends BaseModel {
  constructor(data) {
    super(data);
    const { modelName, model, models } = data || {};
    this.modelName = modelName;
    this.model = model;
    this.models = models;
    this.path = model.tableName;
  }
}

module.exports = SQLiteBaseModel;
