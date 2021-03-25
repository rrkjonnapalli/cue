const express = require('express');

class App {
  constructor() {
    this.app = express();
  }

  init() {
    this.app.use(express.json({ limit: 1024 * 1024 * 50 }));
    this.app.use(express.urlencoded({ extended: true }));
  }

  async validate() {
    return Promise.resolve();
  }

  getInstance() {
    return this.app;
  }
}

module.exports = App;
