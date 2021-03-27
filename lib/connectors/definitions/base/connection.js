class Connection {
  constructor(name) {
    this.name = name;
    this.connection = null;
    this.models = {};
    this.generics = {
      models: {}
    };
  }
}

module.exports = Connection;
