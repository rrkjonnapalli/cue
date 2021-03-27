const CueError = require('./error');

module.exports = {
  get NOT_IMPLEMENTED() {
    return new CueError('GENERIC-0001', 'method not implemented yet');
  },
  get NOT_FOUND() {
    return new CueError('GENERIC-0002', 'not found');
  }
};
