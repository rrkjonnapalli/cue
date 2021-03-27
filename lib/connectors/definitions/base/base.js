/* eslint-disable no-unused-vars */
const { GENERIC: GENERIC_ERRORS } = require('@lib/errors');

class DataModel {
  constructor() {
    this.path = '';
  }

  createOne(doc) { return Promise.reject(GENERIC_ERRORS.NOT_IMPLEMENTED); }

  createMany(docs) { return Promise.reject(GENERIC_ERRORS.NOT_IMPLEMENTED); }

  create(docs) { return Promise.reject(GENERIC_ERRORS.NOT_IMPLEMENTED); }

  updateOne(query, update, options) { return Promise.reject(GENERIC_ERRORS.NOT_IMPLEMENTED); }

  updateById(ids, update, options) { return Promise.reject(GENERIC_ERRORS.NOT_IMPLEMENTED); }

  updateMany(query, update, options) { return Promise.reject(GENERIC_ERRORS.NOT_IMPLEMENTED); }

  update(query, update, options) { return Promise.reject(GENERIC_ERRORS.NOT_IMPLEMENTED); }

  readOne(query, options) { return Promise.reject(GENERIC_ERRORS.NOT_IMPLEMENTED); }

  readById(ids, options) { return Promise.reject(GENERIC_ERRORS.NOT_IMPLEMENTED); }

  readMany(query, options) { return Promise.reject(GENERIC_ERRORS.NOT_IMPLEMENTED); }

  read(query, options) { return Promise.reject(GENERIC_ERRORS.NOT_IMPLEMENTED); }

  deleteOne(query, options) { return Promise.reject(GENERIC_ERRORS.NOT_IMPLEMENTED); }

  deleteById(ids, options) { return Promise.reject(GENERIC_ERRORS.NOT_IMPLEMENTED); }

  deleteMany(query, options) { return Promise.reject(GENERIC_ERRORS.NOT_IMPLEMENTED); }

  delete(query, options) { return Promise.reject(GENERIC_ERRORS.NOT_IMPLEMENTED); }
}

module.exports = DataModel;
