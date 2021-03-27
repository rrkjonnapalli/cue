const express = require('express');
const config = require('config');
const connectors = require('@lib/connectors');

const getAPIRouter = require('./api');

class App {
  constructor() {
    this.app = express();
    this.appDB = null;
    this.APP_DB_TYPE = config.get('APP_DB_TYPE');
    this.APP_DB_CONFIG = config.get('APP_DB_CONFIG');
    this.API_VERSION = config.get('API_VERSION');
  }

  async init() {
    this.app.use(express.json({ limit: 1024 * 1024 * 50 }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(`/api/v${this.API_VERSION}`, getAPIRouter(this.appDB.generics.models));
  }

  async initializeConnectors() {
    this.appDB = new connectors[this.APP_DB_TYPE](this.APP_DB_CONFIG);
    try {
      await this.appDB.init();
      await this.appDB.initializeModels();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async validate() {
    return Promise.resolve();
  }

  getInstance() {
    return this.app;
  }
}

module.exports = App;
